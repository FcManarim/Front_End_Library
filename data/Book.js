class Book {
  constructor(name, author, sinopse, idiom, isbn, image, price, date) {
    this.name = name;
    this.author = author;
    this.sinopse = sinopse;
    this.idiom = idiom;
    this.isbn = isbn;
    this.image = image;
    this.price = price;
    this.date = date;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
};

export default Book;
