"use strict";
//Basic types
let id = 5;
let company = "Arthur Gartner";
let isPublished = true;
//Any type can be anything
let x = "Hello";
//Initizalize variables
let age;
x = true;
//For arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuples - specify types
let person = [1, "Brad", true];
//Tuple array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Unions
let pid;
pid = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
//Type Assertion - treat entity as different type
let cid = 1;
// let customerId = <number>cid;
let customerID = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//No return
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const arthur = new Person(1, "Arthur Gartner");
const mike = new Person(2, "Mike Jordan");
arthur.id = 5;
// console.log(arthur);
// console.log(arthur.register());
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "Jill"]);
//This is not allowed since generic == number
//numArray.push("hello");
