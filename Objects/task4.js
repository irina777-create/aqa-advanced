const person = {
  firstName: "Олександр",
  lastName: "Іваненко",
  age: 30,
};

person.email = "oleksandr.ivanenko@example.com";

delete person.age;

console.log(person);
