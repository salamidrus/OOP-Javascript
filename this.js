// Alone
console.log(this, "--global object");

// In a function
function thisFunc() {
  console.log(this, "--global object");
}

thisFunc();

// Method
const person = {
  name: "tesName",
  eat: function () {
    console.log(this, "owner object"); // in this case, person, you can access any property or method
  },
};
person.eat();
