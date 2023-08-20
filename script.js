const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    };

}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

const modal = document.querySelector("dialog");
const addBtn = document.querySelector(".addBtn");
const closeBtn = document.querySelector(".closeBtn");
const submitBtn = document.querySelector(".submitBtn");

addBtn.addEventListener("click", () => modal.showModal());
closeBtn.addEventListener("click", () => modal.close());

// book display

const bookDisplay = document.querySelector(".bookDisplay");

const createBookCard = (book) => {
    console.log(book);

    let bookCard = document.createElement("div");

    let titleText = document.createElement("p");
    titleText.textContent = book.title;
    bookCard.appendChild(titleText);

    let authorText = document.createElement("p");
    authorText.textContent = book.author;
    bookCard.appendChild(authorText);

    let pagesText = document.createElement("p");
    pagesText.textContent = book.pages;
    bookCard.appendChild(pagesText);

    let readText = document.createElement("p");
    readText.textContent = book.read
    bookCard.appendChild(readText);

    bookDisplay.appendChild(bookCard);
}

const insertBookCard = (library) => {
    library.forEach(book => {
        createBookCard(book)
    })
}

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, read);

    document.querySelector("#title").value = null;
    document.querySelector("#author").value = null;
    document.querySelector("#pages").value = null;
    document.querySelector("#read").checked = false;

    insertBookCard(myLibrary);

    modal.close();
})
