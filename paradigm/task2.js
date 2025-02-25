
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

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

    static getOldestBook(books) {
        return books.reduce((oldest, current) => {
            return (current.year < oldest.year) ? current : oldest;
        });
    }
}

class EBook extends Book {
    constructor(title, author, year,fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

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


const book1 = new Book("Постороній", "Альберт Камю", 1942, "PDF");
const ebook1 = new EBook("Процес", "Франц Кафка", 1913, "PDF");
const book2 = new Book("Блакитний лотос", "Єрже", 1936, "EPUB");



const booksArray = [book1, ebook1, book2];


const oldestBook = Book.getOldestBook(booksArray);

console.log("Найдавніша книга:");
oldestBook.printInfo();
