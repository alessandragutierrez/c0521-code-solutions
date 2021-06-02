/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (Math.sign(amount) !== 1 || Math.floor(amount) !== 0) {
    return false;
  }
  this.transactions.push(deposit);
  return true;
};

Account.prototype.withdraw = function () {

};

Account.prototype.getBalance = function () {

};
