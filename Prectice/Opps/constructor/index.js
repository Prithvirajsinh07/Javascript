function BankAccount(username , balance = 0) {
    this.username = username;
    this.balance = +balance;
    this.accountnumber = Date.now();

    this.deposit = (amount) => {
        this.balance += amount;
    }
    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}
BankAccount();
// const pruthviAccount = new BankAccount ("Pruthvirajsinh" , 5000);
// const shivangAccount = new BankAccount ("Shivang" , 5000);

// Account 

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const arr = [];

accountForm.addEventListener ("submit" , function (e) {
e.preventDefault();
const account = new BankAccount(customerName.value , balance.value);
arr.push(account);
console.log(arr);
})

// deposite 

const depositForm = document.querySelector("#depositForm");
      const accountNumber = document.querySelector("#accountNumber");
      const amountDeposit = document.querySelector("#amountDeposit");

      depositForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const account = arr.find(
          (account) => account.accountNumber === +accountNumber.value
        );
        
        account.deposit(+amountDeposit.value);
        console.log(arr);
      });




