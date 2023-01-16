let myLibrary = [];

function Book(title, author, description, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(title, author, description, read);
}

const popup = document.getElementById("add-card-popup");
const submitButton = document.getElementById("submit-button");
const cancelButton = document.getElementById("cancel-button");
const form = document.getElementById("add-card-form");
const cardGrid = document.getElementById("card-grid");
title = document.getElementById("book-title-input");
author = document.getElementById("book-author-input");
description = document.getElementById("description-input");
read = document.getElementById("book-read-input");

console.table(popup.id, submitButton.id, cancelButton.id, form.id, cardGrid.id);

const addCardButton = document.getElementById("add-card-button");
addCardButton.addEventListener("click", (e) => {
    popup.classList.toggle("hidden");
    return;
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    newBook = new Book(
        (titleValue = title.value),
        (authorValue = author.value),
        (descriptionValue = description.value),
        (readValue = read.checked)
    );
    console.table(newBook);
    newCard = document.createElement("div");
    newCard.classList.add("card");
    if (readValue) {
        newCard.classList.add("read");
    } else {
        newCard.classList.add("unread");
    }

    newTitle = document.createElement("h2");
    newTitle.classList.add("book-title");
    newTitle.textContent = newBook.title;
    newCard.appendChild(newTitle);

    newAuthor = document.createElement("p");
    newAuthor.classList.add("book-author");
    newAuthor.textContent = newBook.author;
    newCard.appendChild(newAuthor);

    newDescription = document.createElement("p");
    newDescription.classList.add("description");
    newDescription.textContent = newBook.description;
    newCard.appendChild(newDescription);

    newReadButton = document.createElement("button");
    newReadButton.classList.add("read-toggle");
    newReadButton.textContent = "Read +/-";
    newReadButton.addEventListener("click", (e) => {
        e.target.parentNode.classList.toggle("read");
        e.target.parentNode.classList.toggle("unread");
    });
    newCard.appendChild(newReadButton);

    newRemoveButton = document.createElement("button");
    newRemoveButton.classList.add("remove");
    newRemoveButton.textContent = "Remove";
    newRemoveButton.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    });
    newCard.appendChild(newRemoveButton);

    cardGrid.appendChild(newCard);

    console.log(title.id);

    title.value = "";
    author.value = "";
    description.value = "";
    read.checked = "";

    popup.classList.toggle("hidden");

    return;
});

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.toggle("hidden");
    return;
});
