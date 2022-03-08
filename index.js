class Aimal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  talk() {
    return `hello i'm ${this.name}`;
  }
}

class Cat extends Aimal {
  constructor(name) {
    super(name);
  }
  talk() {
    return "Meow";
  }
}

class Dog extends Aimal {
  constructor(name) {
    super(name);
  }
  talk() {
    return "Woof";
  }
}

const animal = new Aimal("animal");
console.log(animal.getName());
console.log(animal.talk());

const cat = new Cat("Tom");
console.log(cat.getName());
console.log(cat.talk());

const dog = new Dog("Doggy");
console.log(dog.getName());
console.log(dog.talk());
