function BankAccount (userName , balance = 0) {
this.username = userName;
this.balance = +balance;
this.accountNumber = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}

BankAccount();

 const pruthviAccount = new BankAccount ("Pruthvirajsinh" , 5000);
 const yashAccount = new BankAccount ("Yashrajsinh" , 3000);
 
pruthviAccount.deposit(50000);
yashAccount.deposit(39000)
console.log(pruthviAccount);
console.log(yashAccount);



