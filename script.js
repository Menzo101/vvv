const user = {
  firstName: "olu",
  age: 30,
  isMarried: true,

  greet: function () {
    return `${this.firstName} and ${this.age}`;
  },
};

const userTwo = {
  firstName: "john",
  age: 20,
  isMarried: true,

  greet: function () {
    return `${this.firstName} and ${this.age}`;
  },
};
const result = user.greet();
const resultTwo = userTwo.greet();
console.log(result);
console.log(resultTwo);

console.log(this);
