/*
    *** Type Alias ***
      => Type Alias we for type checking for primitive data type of Javascript.
      => It is very good for function signature than interface, but not good for declare type object.
      
    *** Interface ***
      => If think we want to work specific object and class, we can use this, all of the other case we can use type alias.
      => Interface we are using for checking type of javascript object. It is good for object type declare.
      => we can extend another interface but type alias is not has this features but we can use & symbol for this work
*/
type User = {
  name: string;
  age: number;
};

// for extending another type alias
type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

// for extending another type Interface
interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

//Object , Function , Array

// function signature with type alias, which is the best for this
type addNumbersType = (num1: number, num2: number) => number;

// function signature with interface, which is not best for this
interface IAddNumbers {
  (num1: number, num2: number): number;
}

type rollNumbersType = number[];
interface IRollNumbers {
  [index: number]: string;
}
const rollNumbers: IRollNumbers = ["1", "4", "5"]; //[index]

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

const user: extendedUser = {
  name: "Omanush",
  age: 2000,
  role: "Unknown",
};
// const userWithTypeAlias: User = {
//   name: "Type Alias",
//   age: 100,
// };

// const userWithInterface: IUser = {
//   name: "Interface",
//   age: 200,
// };
// userWithInterface.
