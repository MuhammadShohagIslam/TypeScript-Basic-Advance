/*
  *** Abstraction ***

    => যখন তুমি একটা ক্লাস declare করবা, তখন সেখানেই
     যে method ব্যবহার করবা, তখন সে method ar real implementation সেটা সম্পর্কে আমরা জানব না 
     কিন্তু আমরা বুঝতে পারব সেটা shape কেমন হবে
    => we do not know to calculate, details of the calculation, just we know only shape of the method,

    => necessary information থাকবে, but details information থাকবে na.

    => interface or abstraction, মাধ্যমে আমরা বলে দিতে পারি একটা ক্লাসের shape কেমন হবে;

    => interface মাধ্যমে আমরা রিয়েল implementation 
     করবো না, but how to shape of the method into the class 
     will be we can say to the class

    => আমরা real implementation টা দেখতে পাবো না but সেটা shape কেমন হবে তা আমরা বলে দিতে পারব
*/

//interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Car",
//   model: "2000",
// };

// this is shape of the method
// not real implementation
// inside interface of method, we must have to use
// what ever we can do of this inside of this method.
interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move?(): void; // this optional method, if we do not use, not face any type error.
}

class Car implements Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  // this is the details of this method
  // but we can see details of this method
  startEngine(): void {
    // what ever we can do of this inside of this method.
    console.log(" I am starting engine... ");
  }

  // this is the details of this method
  // but we can see details of this method
  stopEngine(): void {
    // what ever we can do of this inside of this method.
    console.log(" I am syopping engine");
  }

  // move(): void {
  //   console.log(" I am syopping engine");
  // }
}

const vehicle1 = new Vehicle("Car", "Toyota", 2000);

// //abstract class

/*
  *** if we use abstract before properties or method, then
  if we extends of this class, you must have to use or add
  into extended class 
  *** 

*/
// this is shape of the class
// not real implementation
// inside interface of method, we must have to use
// what ever we can do of this inside of this method.
abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  // this is shape of the method
  // not real implementation
  abstract startEngine(): void 
  abstract stopEngine(): void 
  move(): void {
    console.log(" I am syopping engine");
  }
 
}

class Car extends Vehicle{
  // inside interface of method, we must have to use
  // what ever we can do of this inside of this method.

  startEngine(): void   {
    // what ever we can do of this inside of this method.
    console.log(" I am starting engine... ");
  }

  stopEngine(): void {
    // what ever we can do of this inside of this method.
    console.log(" I am stopping engine... ");
  }
  
}

// we can create instance of the abstarct class, but we can
// use as shape of the class, this class would be this way.
const car1= new Vehicle('Car','Honda',2015)
car1.