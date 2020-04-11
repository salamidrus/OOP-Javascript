const book = {
  title: "OOP in Javascript", // property
  price: 10000, // property
  cover: "hard", // property
  weight: "500g", // property
  detail: function () {
    // console.log(this, "--this");
    // method
    // return (
    //   this.title +
    //   ", Rp" +
    //   this.price +
    //   ", " +
    //   this.cover +
    //   " Cover, " +
    //   this.weight
    // );
    // in template literal
    return `${this.title}, Rp${this.price}, ${this.cover}, ${this.weight}`;
  },
};

// console.log(book.detail(), "--book");

// Create New Object
const book1 = {
  title: "OOP in Javascript", // property
  price: "10000", // property
  cover: "hard", // property
  weight: "500g", // property
  detail: function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  },
};

const book2 = {
  title: "Algorithm Pattern", // property
  price: "50000", // property
  cover: "hard", // property
  weight: "700g", // property
  detail: function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  },
};

const book3 = {
  title: "How to Crack the Coding Interview", // property
  price: "20000", // property
  cover: "soft", // property
  weight: "600g", // property
  detail: function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  },
};
