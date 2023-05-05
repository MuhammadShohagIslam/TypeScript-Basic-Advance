/*
  *** Access Modifier ***
    => এক্সেস মডিফাইড হচ্ছে এক্সেস take মডিফাই করা
    (Access modifier means, modify the access)

    => কোথায় এক্সেস থাকবে কোথায় এক্সেস থাকবে না সেটা 
       নির্ধারণ করা (Determining where access will be and where express will not be )
*/

/*
    *** Readonly ***
    => 'Readonly' means, if we use Readonly before any
    variable inside class, we can access from outside of the class.
    but we can not modify from the outside the class, it is only
    readonly

    like: readonly id
*/

/*
    *** Private ***
    => 'Private' means, if we use private before any
    variable inside class, we can not access from outside of the class.
    it is only accessible into the inside class
    like: private __balance
    => we can not access from another class also.
    like if we extends this class to another class.
    in this time, we can access this variable.

    * Note: to solve this issue we can use protected. but
    if we use protected, it will be cause for unbalanced 
    of your code. So, use special case.

*/

/*
    *** Public ***
    => 'Public' means, if we use Public before any
    variable inside class, we can access from outside of the class.
    it is accessible inside class and outside the class
    like: public name
    => by default it is public inside the class

*/
/*
    *** Protected ***

    => 'protected' means, if we use protected before any
    variable inside class, we can not access from outside of the class.
    it is accessible inside class and outside the class
   if we extend the this class.

    => if we use protected, it will be cause for 
    unbalanced of your code. So, use special case.

*/

/*
  *** Summary ***
  => We can use readonly, private, if we use parameter properties we can use public
  => protected use, we have need special case.

*/

class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My Current Balance is : ${this._balance}`);
    }
    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }
}

class StudentAccount extends BankAccount {
    test() {
        this._balance; // we can not access if we use 'private'
        this._balance; // we can access if we use 'protected'
    }
}

// create new instance like object
const myAccount = new BankAccount(444, "Farhan", 20);

// if we do not use 'private' it can be modify from outside
// myAccount._balance = 0;
myAccount.addDeposit(20);
myAccount.getBalance();

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};

// const sum = add(2, 3); // 5

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
const sum = calculator.add(2, 3); // 5
