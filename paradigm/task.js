// Клас Book
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    // Геттери та сеттери для властивості title
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._title = value;
        } else {
            console.log('Невірне значення для назви книги');
        }
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._author = value;
        } else {
            console.log('Невірне значення для автора книги');
        }
    }

    get year() {
        return this._year;
    }
    set year(value) {
        if (typeof value === 'number' && value > 0) {
            this._year = value;
        } else {
            console.log('Невірне значення для року випуску');
        }
    }



    printInfo() {
        console.log(`Назва: ${this._title}`);
        console.log(`Автор: ${this._author}`);
        console.log(`Рік випуску: ${this._year}`);
    }
}

// Клас EBook, який успадковує від Book
class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // Геттери та сеттери для властивості fileFormat
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI'];
        if (validFormats.includes(value)) {
            this._fileFormat = value;
        } else {
            console.log('Невірний формат файлу. Дозволені формати: PDF, EPUB, MOBI');
        }
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._fileFormat}`);
    }
}

const ebook = new EBook("Гаррі Поттер", "Джоан Роулінг", "PDF");


ebook.printInfo();


ebook.title = "Гаррі Поттер і Камінь Філософа";
ebook.author = "";
ebook.year = -1000;
ebook.genre = "Фантастика";
ebook.fileFormat = "TXT";
ebook.fileFormat = "EPUB";


ebook.printInfo();
