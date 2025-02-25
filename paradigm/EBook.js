// Клас Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`Назва: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Рік випуску: ${this.year}`);
    }
}

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
    }
}


const ebook = new EBook("Велика Глушина", "Крістін Генна", 2024 , "PDF");

ebook.printInfo();
