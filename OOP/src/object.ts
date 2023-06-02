/*
    *** What is object ***
    => Object is a collection of properties where each propert is a key-value pair. key is always string
      and name of the property. and value will be any kind of data type.
    => Class is the blue print or template of the object that describes properties and behaivour of the object.

*/


class Animal {
  // name:string
  // species:string
  // sound:string
  
  // define shorcut way parameter properties with public
  // *** thorugh parameter propeties, we can do together withour type decalre and initialize.
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`); // 'German Shephard says Ghew Ghew'
  }
}

// we can make many object from one class like from Animal  class to create two object such as dog, cat
// which more clean and easy to maintable and readbale.
const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Persian", "cat", "meaw meaw");
dog.makeSound();
cat.makeSound();

cat.name = "Special Cat";
