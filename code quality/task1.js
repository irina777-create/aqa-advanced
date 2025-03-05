// prettier
// pre-commit hook

const car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
}

const car2 = {
    brand: 'Nissan',
    model: 'March',
    owner: 2018,
}

const car3 = { ...car1, ...car2 }

console.log(car3)
