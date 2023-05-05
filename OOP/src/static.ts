/*
    *** Static *** 
    => When a member or method is declared as 'static', it means that it belongs to the class itself,
      rather than to any particular instance of the class. This means that the member or method can be
      accessed directly from the class without the need for an instance of the class.

    => Static members and methods are useful when you want to share data or behavior 
      between all instances of a class. For example, a static variable could keep track 
      of the total number of instances created, or a static method could provide a utility 
      function that is used throughout the code
 */

class Counter {
  // this is the fix property for Counter class
  static counter: number = 0;

  // constructor(counter: number){
  //   this.counter = counter
  // }

  static increment(): number {
    // we can not use this, because if we use static, it means it belongs to the class itself 
    // rather than to any particular instance of the class
    // This means that the member or method can be  accessed directly
    // from the class without the need for an instance of the class.

    // return (this.counter = this.counter + 1)
    return (Counter.counter = Counter.counter + 1);
  }
 
  // increment(): number {
  //   return (this.counter = this.counter + 1);
  // }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}

// const instance1 = new Counter();
// const instance2 = new Counter();

// we can not use this, because if we use static, it means it belongs to the class itself 
// rather than to any particular instance of the class
// This means that the member or method can be  accessed directly
// from the class without the need for an instance of the class.

// console.log(instance2.increment());
console.log(Counter.increment()); // 0-1
console.log(Counter.increment()); // 1-2
