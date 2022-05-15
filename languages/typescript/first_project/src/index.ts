import { v4 as uuidV4 } from "uuid";

//Declare new type
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

// console.log(uuidV4());

//Passing in types
const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  addListItem(newTask);

  input.value = "";

  //typescript knows that input will not be null since previous line checks for null value.
  //input.value;
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  saveTasks();
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJson = localStorage.getItem("TASKS");

  if (taskJson == null) return [];

  return JSON.parse(taskJson);
}
