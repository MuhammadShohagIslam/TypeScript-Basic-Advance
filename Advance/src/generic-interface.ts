// Generic Interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
  other: V;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
  name: "K",
  husband: {
    name: "P",
    age: 30,
  },
  wife: {
    name: "W",
    age: 40,
  },
};

const crush1: CrushInterface<boolean, string> = {
  name: "K",
  husband: true,
  wife: "C",
};

const crush2: CrushInterface<string> = {
  name: "K",
  husband: "P",
};

interface HusbandInterface {
  name: string;
  salary: number;
}

const crush3: CrushInterface<HusbandInterface> = {
  name: "K",
  husband: {
    name: "P",
    salary: 0.01,
  },
};

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["P", "K"];

// type RelationWithSalaryType = { name: string; salary: number };

interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "P",
    salary: 1000000000,
  },
  "Kate Winslet",
];

const relationWithSalary2: GenericTuple<RelationWithSalaryType, string> = [
  {
    name: "P",
    salary: 1000000000,
  },
  "Kate Winslet",
];

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rolllNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];

add(x, y, z);
add(3, 4, 5);
