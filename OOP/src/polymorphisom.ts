/*
    *** Polymorphisom ***

      => Poly -> অনেকগুলো (Many), Morphisam -> রূপ , so 
      Polymorphisam means যে জিনিসটার অনেকগুলো রূপ থাকতে সেটাই 
      Polymorphisam, A thing that has many forms or behaivehour
      it's called Polymorphisam. 

      => e.m: আমাদের আশেপাশে অনেক বহুরূপে মানুষ রয়েছে সেগুলো  
      স্থানভেদে রূপ পরিবর্তন করে তাকে এগুলো হলো বহুরূপী. মানুষটা 
      same কিন্তু স্থান কাল ভেদে ভিন্ন রূপ দেখায়., it's call

      => যখন অনেকগুলো class থাকবে, ক্লাসের same মেথড, different 
      different output দিবে, রুপ দেখাবে, সেটাই Polymorphisom.
      When we have many class, same method of our class gives  
      different output or different behaivehour, it's called 
      Polymorphisam


*/

/*
  *** takeNap is the same method of different class,
  but it show and gives different output, it's called
  polymorphisam 
*/
class Person {
  takeNap(): void { // same method
    console.log("I am sleeping 8 hours per day");
  }
}

class Student extends Person {
  takeNap(): void { // same method
    console.log(`I am sleeping 10 hours per day`);
  }
}

class Developer extends Person {
  takeNap(): void { // same method
    console.log(`I am sleeping 5 hours per day`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

// A thing that has many forms or behaivehour
// it's called Polymorphisam. 
getNap(person1); // output different
getNap(person2); // output different
getNap(person3); // output different


class Shape {
  getArea(): number { // same method
    return 0;
  }
}

// area -> pi *r *r
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  // same method
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  // same method
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

// A thing that has many forms or behaivehour
// it's called Polymorphisam. 
getAreaOfShape(new Circle(10));  // output different
getAreaOfShape(new Rectangle(10, 12)); // output different
