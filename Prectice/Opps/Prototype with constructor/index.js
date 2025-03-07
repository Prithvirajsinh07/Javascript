function BankAccount(userName, balance = 0) {
    this.userName = userName;
    this.balance = balance;
    this.accountNumber = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
BankAccount();

function savingAccount(userName, balance = 0) {
    BankAccount.call(this, userName, balance);
    this.transationLimit = 10000;
}
savingAccount.prototype.takingPersonalLoan = function (amount) {
    console.log("Personal loan is taken with an amount of", amount);

}

function currentAccount(userName, balance = 0) {
    BankAccount.call(this, userName, balance);
    this.transationLimit = 50000;
}
currentAccount.prototype.takingBussinessLoan = function (amount) {
    console.log("Business loan is taken with an amount of", amount);
}

savingAccount.prototype = Object.create(BankAccount.prototype);
currentAccount.prototype = Object.create(BankAccount.prototype);

const pruthviAccount = new savingAccount("Pruthvirajsinh", 7000);
const yashAccount = new currentAccount("yashrajsinh", 6000);


pruthviAccount.deposit(10000);
pruthviAccount.withdraw(15000)
console.log(pruthviAccount);


yashAccount.deposit(10000)
console.log(yashAccount);


