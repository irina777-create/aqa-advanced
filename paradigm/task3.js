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
    if (typeof value === "string" && value.length > 0) {
      this._title = value;
    } else {
      console.log("Невірне значення для назви книги");
    }
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value === "string" && value.length > 0) {
      this._author = value;
    } else {
      console.log("Невірне значення для автора книги");
    }
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value === "number" && value > 0) {
      this._year = value;
    } else {
      console.log("Невірне значення для року випуску");
    }
  }

  printInfo() {
    console.log(`Назва: ${this._title}`);
    console.log(`Автор: ${this._author}`);
    console.log(`Рік випуску: ${this._year}`);
  }
}

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    const validFormats = ["PDF", "EPUB"];
    if (validFormats.includes(value)) {
      this._fileFormat = value;
    } else {
      console.log("Невірний формат файлу. Дозволені формати: PDF, EPUB");
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`Формат файлу: ${this._fileFormat}`);
  }

  static createFromBook(bookInstance, fileFormat) {
    return new EBook(
      bookInstance.title,
      bookInstance.author,
      bookInstance.year,
      fileFormat,
    );
  }
}

const book1 = new Book("Над пропастью во ржи", "Джерома Сєлинджера", 1951);

const ebook1 = EBook.createFromBook(book1, "PDF");

ebook1.printInfo();
