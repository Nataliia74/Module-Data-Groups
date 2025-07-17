// for the tests, do not modify this array of books

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];
const list = document.querySelector("#reading-list");
const div = document.querySelector("#content");
console.log(list);
console.log(div);

const objectMap = new WeakMap();

function readingList(books) {
  for (let book of books) {
    const listItem = document.createElement("li");
    listItem.classList.add("book_item");
    listItem.classList.add(book.alreadyRead ? "read" : "unread");

    const text = document.createElement("p");
    text.innerHTML = `<h2>${book.title}</h2><p>by ${book.author}</p>`;

    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.classList.add("img_item");

    listItem.appendChild(text);
    listItem.appendChild(img);
    list.appendChild(listItem);
    objectMap.set(listItem, book);
    console.log(objectMap);
  }
}

readingList(books);
