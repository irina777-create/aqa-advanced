//Завдання 4.1
let radius = 5;

// Обчислюємо площу кола за формулою π * r^2
let area = Math.PI * Math.pow(radius, 2);


console.log("Радіус кола:", radius);
console.log("Площа кола:", area);

//Завдання 4.2
let length = 10;
let width = 5;

let area = length * width;

console.log("Довжина прямокутника:", length);
console.log("Ширина прямокутника:", width);
console.log("Площа прямокутника:", area);

//Завдання 4.3
let radius = 5;
let height = 10;


let volume = Math.PI * Math.pow(radius, 2) * height;

// Округлюємо результат до 2 знаків після крапки
volume = volume.toFixed(2);


console.log("Радіус циліндра:", radius);
console.log("Висота циліндра:", height);
console.log("Об'єм циліндра:", volume);


