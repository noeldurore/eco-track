/* 
   Filename: ComplexCode.js
   Content: A complex code demonstrating the implementation of a virtual bank system
*/

// Class definition for BankAccount
class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.transactions = [];
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "DEPOSIT", amount });
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "WITHDRAW", amount });
    }
  }

  // Method to display account balance and transaction history
  displayAccountDetails() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Holder: ${this.accountHolder}`);
    console.log(`Balance: $${this.balance}`);
    console.log("Transaction History:");
    this.transactions.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type}: $${transaction.amount}`
      );
    });
  }
}

// Create instances of BankAccount class
const account1 = new BankAccount("123456789", "John Doe", 5000);
const account2 = new BankAccount("987654321", "Jane Smith", 10000);

// Perform some transactions on the accounts
account1.deposit(2000);
account1.withdraw(1000);
account2.withdraw(500);
account2.deposit(1500);

// Display account details
account1.displayAccountDetails();
console.log("\n"); // Add newline for clarity
account2.displayAccountDetails();

// Output:
// Account Number: 123456789
// Account Holder: John Doe
// Balance: $6000
// Transaction History:
// 1. DEPOSIT: $2000
// 2. WITHDRAW: $1000

// Account Number: 987654321
// Account Holder: Jane Smith
// Balance: $12000
// Transaction History:
// 1. WITHDRAW: $500
// 2. DEPOSIT: $1500