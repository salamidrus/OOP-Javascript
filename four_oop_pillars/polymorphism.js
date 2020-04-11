class People {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, good morning ${this.name}`;
  }
}

class Person extends People {
  constructor(name) {
    super(name);
  }
  greet() {
    return `Halo, selamat pagi ${this.name}`;
  }
}

class Person2 extends Person {
  constructor(name) {
    super(name);
  }

  greet() {
    // polymorphism
    return `Good Afternoon ${this.name}`;
  }
}

const person2 = new Person2("Andi");

console.log(person2.greet());
