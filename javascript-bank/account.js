/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (Math.sign(amount) !== 1 || amount % 1 !== 0) {
    return false;
  }
  this.transactions.push(deposit);
  return true;
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (Math.sign(amount) !== 1 || amount % 1 !== 0) {
    return false;
  }
  this.transactions.push(withdrawal);
  return true;
};

Account.prototype.getBalance = function () {
  var deposits = [];
  var withdrawals = [];
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits.push(this.transactions[i].amount);
    } else {
      withdrawals.push(this.transactions[i].amount);
    }
  }
  var depositsTotal = sumAll(deposits);
  var withdrawalsTotal = sumAll(withdrawals);
  var balance = depositsTotal - withdrawalsTotal;
  return balance;
};

function sumAll(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
