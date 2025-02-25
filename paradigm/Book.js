class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`"${this.name}" - "${this.author}", "${this.year}" рік`);
    }
}


const book1 = new Book("Переломний рік", "Бріанна Вест", 2024);
const book2 = new Book("Чотири вітра", "Крістін Генна", 2024);
const book3 = new Book("Шукачі мушель", "Розамунда Пілчер", 2024);


book1.printInfo(); // "1984" - Джордж Орвелл, 1949 рік
book2.printInfo(); // "Майстер і Маргарита" - Михайло Булгаков, 1967 рік
book3.printInfo(); // "Гаррі Поттер і філософський камінь" - Дж. К. Ролінґ, 1997 рік
