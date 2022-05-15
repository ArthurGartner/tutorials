//Basic types

let id: number = 5;
let company: string = "Arthur Gartner";
let isPublished: boolean = true;
//Any type can be anything
let x: any = "Hello";
//Initizalize variables
let age: number;

x = true;

//For arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuples - specify types
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Unions
let pid: string | number;
pid = 22;

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects

type User = {
  id: number;
  name: string;
};
const user = {
  id: 1,
  name: "John",
};

//Type Assertion - treat entity as different type
let cid: any = 1;
// let customerId = <number>cid;
let customerID = cid as number;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}

//No return
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; //age is optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};
//Interface CANNOT be used with primitives or unions

type Point = number | string;
const p1: Point = 1;

//Fails since id is read only
//user1.id = 5

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  //Public, private, protected
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

console.log(emp.register());

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

//This is not allowed since generic == number
//numArray.push("hello");
