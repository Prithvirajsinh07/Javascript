class BankAccount {
    userName;
    balance;
    accountNumber;
    constructor(userName, balance = 0) {
        this.userName = userName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    deposit = (amount) => {
        this.balance += amount;
    }
    withdraw = (amount) => {
        this.balance -= amount;
    }
}

const pruthviAccount = new BankAccount("Pruthvirajsinh", 10000);
const yashAccount = new BankAccount("Yashrajsinh", 8000);

pruthviAccount.deposit(5000);
yashAccount.deposit(3000)
console.log(pruthviAccount);
console.log(yashAccount);
