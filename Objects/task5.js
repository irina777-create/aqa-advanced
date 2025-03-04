const users = [
  { name: "Аліна", email: "alina@example.com", age: 25 },
  { name: "Петро", email: "petro@example.com", age: 30 },
  { name: "Anastasya", email: "anastasya@example.com", age: 28 },
];

for (const { name, email, age } of users) {
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}
