/*
  *** Inheritance ***
    => Inheritance is one kind of pilar of oop, through which we can create new class based on existing class
    => new class is the child class or subclass, based on exiting class is superclass or parent class.
    => In parent class, where we can stored common properties and method. this common class called parent class
        we can create new class with extend, so we can use parent class whole common method and properties
        for this way, we can not need this method for child class. beacuse we can use it with inheritance.
    => When we are create an object based on class, it's called instance of the class.
    
    *** Constructor ***
      => constructor is a speacial method or function which is automically called when we create a object based on the 
        class or when instace of the class created.

*/

// Parent is the superclass or parent class of the class
// where stored propeties and method common peroperites.
class Parent {
  name: string;
  age: number;
  address: string;

  // constructor is the one kind of special method or function which automitically called 
  // when created intance of the class.
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

// student1 is the instance of the Student class beacuse 
// when i create an object based on a class,it's called instance of the class. 
const student1 = new Student('Mr.X',15,'Uganda');
student1.

// child class or subclass like Teacher
class Teacher extends Parent {
  // this properties is the Teacher own properties.
   designation: string

  constructor(name: string, age: number, address: string, designation: string) {
    // pass data to parent class with super class
     super(name,age,address)
     this.designation = designation;
  }

  takeClasses(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} class`;
  }
}
