const electron = require("electron");
const url = require("url");
const path = require("path");
const { create } = require("domain");

//Deconstruct form electron
const { app, BrowserWindow, Menu, ipcMain } = electron;

//Set ENV
process.env.NODE_ENV = "production";

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on("ready", function () {
  //Create the new main window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  //Load html into windo
  mainWindow.loadURL(
    //Pass path into url, file://dirname/mainWindow
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file",
      slashes: true,
    })
  );
  //Quit app when closed
  mainWindow.on("closed", function () {
    app.quit();
  });

  //Build menu form template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  //Insert menu
  Menu.setApplicationMenu(mainMenu);
});

//Handle create add window
function createAddWindow() {
  //Create the new main window
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Add Shopping List Item",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  //Load html into windo
  addWindow.loadURL(
    //Pass path into url, file://dirname/mainWindow
    url.format({
      pathname: path.join(__dirname, "addWindow.html"),
      protocol: "file",
      slashes: true,
    })
  );

  //Garbage collection handle
  addWindow.on("close", function () {
    addWindow = null;
  });
}

// Catch item:add
ipcMain.on("item:add", function (e, item) {
  mainWindow.webContents.send("item:add", item);
  addWindow.close();
});

// Create the menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          createAddWindow();
        },
      },
      {
        label: "Clear Items",
        click() {
          mainWindow.webContents.send("item:clear");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];

//If mac, add empty object to menu
//Empty space to account for Mac view showing electron
if (process.platform == "darwin") {
  //Unshift adds to beginning of array vs push which adds to end
  mainMenuTemplate.unshift({});
}

// Add developer tools item if not in production
if (process.env.NODE_ENV != "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
    ],
  });
}
