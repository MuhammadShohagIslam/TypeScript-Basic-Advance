/*
    *** Encapsulation ***
    => It is one kind of system of  hiding properties or method 
    => Encapsulation, helps to does not access and modify from the outside of this class
    but getter and setter help to access of Encapsulation properties or method 
*/

class MyBankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
  
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
     
    private getTestBalance(): number{
       return this._balance
    }
    
    // through get, which helps us to access Encapsulate method
    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }
  
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }
  
  
  const myAccount = new MyBankAccount(444, "Persian", 30);
  // myAccount.addDeposit(20);
  // myAccount.getBalance();
  // myAccount.getBalance();
  console.log(myAccount.balance); // we do not need to say, myAccount.balance(), even if it method
  // myAccount.deposit(30 ) -> we do not need to say, myAccount.balance(30), even if it method
  myAccount.deposit = 30; // just write this way if we setter.
  console.log(myAccount.balance);