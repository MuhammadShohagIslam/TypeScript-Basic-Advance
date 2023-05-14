/*
   *** Type Gurd ***
    => TypeScript এ যখন টাইপ কে আমি বাধা দিব তখন এটাকে টাইম Gurd বলে
    
   *** keyof ***
    => keyof gurd সবসময় runtime এ কাজ করে
    => if it check type of this properties
    
   *** in Gurd ***
    => this always to use object
    
   *** instance of gurd***
    => এটা class এবং object কে gurd করে
    
   *** advantange ***
    => without type alias use for type cheacking, we can use type gurd
    => type alias is the best practice
    => এই type এর উপর ভিত্তি করে আমরা এর যথাযথ properties access করতে পারে
*/

//keyof guard
type Alphaneumeric = string | number;
// keyof guard
function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 == "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add("1", "2");
add(1, 2);

//in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  // check role has into user, role is object property
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mr. kallu" };
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

//instaceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(" I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}


// checking 'type' with function
// when we want to check type, we should use is, like 'animal is Dog'
function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}
//or
function isDog(animal: Animal): boolean {
  return animal instanceof Dog;
}

// checking 'type' with function
// when we want to check type, we should use is, like 'animal is Cat'
function isCat(animal: Animal): animal is Cat {
  return animal instanceof Cat;
}
//or
// checking 'type' with function
function isCat(animal: Animal): boolean {
  return animal instanceof Cat;
}

function getAnimal(animal: Animal) {
  
  /*
    // checking aniaml is come from Dog class or not
    // instanceof type gurd, we can access method, properties from class
    if (animal instanceof Dog)) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  */
  
  // checking 'type' with isDog function
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Bhai", "dog"); // instance -> Dog
const animal2 = new Cat("Persian Bhai", "cat"); // inatance -> Cat

getAnimal(animal2);
