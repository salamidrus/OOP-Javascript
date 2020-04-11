// In Javascript, you can use function or class constructor

// typical function, example
function person() {}

// function constructor, example
function Person() {}

// function Constructor
function Book(title, price, cover, weight) {
  this.title = title;
  this.price = price;
  this.cover = cover;
  this.weight = weight;
  this.detail = function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  };
}

const newBook1 = new Book("title new", 2000, "hard", "400g");
// console.log(newBook1, "--new book 1");

// Class constructor
class BookClass {
  constructor(title, price, cover, weight, author) {
    this.title = title;
    this.price = price;
    this.cover = cover;
    this.weight = weight;
    var author = author; // private property
  }

  detail() {
    // private method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  }
}

// Create instance

const newBook2 = new Book("title2", 100);
const newBook3 = new BookClass("title1", 1000, "soft", "400g", "Bill");

console.log(newBook3, "--new book3");
