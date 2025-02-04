/*const API_URL = 'http://localhost:5000';

// Fetch and display the list of books from the API
async function fetchBooks() {
    const response = await fetch(`${API_URL}/books`);
    const books = await response.json();
    
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear the current list
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} - $${book.price}`;
        bookList.appendChild(li);
    });
}

// Add a new book to the database
async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    if (!title || !author || !price) {
        alert("Please fill in all the fields.");
        return;
    }

    await fetch(`${API_URL}/add-book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, price })
    });

    // Refresh the book list after adding a new book
    fetchBooks();
}

// Initial Fetch
fetchBooks();
*/
const API_URL = 'http://localhost:5000/books';

async function fetchBooks() {
    const response = await fetch(API_URL);
    const books = await response.json();
    
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} - $${book.price}`;
        bookList.appendChild(li);
    });
}

async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    await fetch(`${API_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, price })
    });

    fetchBooks();
}

fetchBooks();
