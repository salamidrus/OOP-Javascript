// function Constructor
function Book(title, price, cover, weight, author) {
  // public property
  this.title = title;
  this.price = price;
  this.cover = cover;
  this.weight = weight;

  // private property
  const author = author;

  // public method
  this.detail = function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  };

  this.showAuthorTes = function () {
    return author;
  };

  // private method
  function showAuthor() {
    return author;
  }
}

const newBook1 = new Book("title1", 100, "hard", "500g", "author1");
// console.log(newBook1);

// Wallet
function Wallet(creditCard) {
  // private property
  const balance = 100;

  // public property
  this.creditCard = creditCard;

  this.checkBalance = function () {
    // public method
    return balance;
  };

  const checkCreditCard = function () {
    // private method
    return creditCard;
  };

  this.depositAmount = function (amount) {
    return balance + amount;
  };
}

const wallet = new Wallet(47892164826);
// console.log(wallet);
