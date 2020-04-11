class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const peopleOld = new People("river", 20);

class Person extends People {
  constructor(name, age, job, status) {
    super(name, age); // this is how to get the inherit properties/methods
    this.job = job;
    var status = status; // private
    this.showStatus = function () {
      return status;
    };
  }
}

const personOld = new People("Bill", 15);
// console.log(personOld, "--person old");

const person1 = new Person("Ani", 15, "Software Engineer", "married");
// console.log(person1.showStatus(), "--person 1");

// Better Syntax
class Person2 extends People {
  constructor(obj = {}) {
    super(obj);
    this.job = obj.job;
    this.age = obj.age;
    const status = obj.status;
    this.showStatus = function () {
      return status;
    };
  }
}

let person3 = new Person2({
  name: "tes name",
  age: 10,
  job: "tes job",
  status: "tes status",
});

// console.log(person3.showStatus());
