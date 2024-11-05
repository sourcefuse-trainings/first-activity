const bookForm = document.getElementById('bookForm');
const bookTableBody = document.querySelector('#bookTable tbody');
let books = [];

    // Helper: Calculate the age of a book
const calculateBookAge = (year) => new Date().getFullYear() - year;

    // Helper: Validate form inputs
const isValidForm = ({ title, author, year, isbn, genre }) => {
      if (!title || !author || !year || !isbn || !genre) {
        alert('All fields must be filled!');
        return false;
      }
      if (isNaN(isbn)) {
        alert('ISBN must be a number!');
        return false;
      }
      return true;
    };

    // Add Book
    const addBook = (book) => {
      books.push(book);
      renderBooks();
    };

    // Edit Book
    const editBook = (index) => {
      const book = books[index];
      document.getElementById('title').value = book.title;
      document.getElementById('author').value = book.author;
      document.getElementById('year').value = book.year;
      document.getElementById('isbn').value = book.isbn;
      document.getElementById('genre').value = book.genre;
      books.splice(index, 1);  // Remove the book so it can be re-added
      renderBooks();
    };

    // Delete Book
    const deleteBook = (index) => {
      books.splice(index, 1);
      renderBooks();
    };

    // Render Books in Table
    const renderBooks = () => {
      bookTableBody.innerHTML = '';  // Clear previous table rows
      books.forEach(({ title, author, year, isbn, genre }, index) => {
        const age = calculateBookAge(year);
        const row = `
          <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td>${isbn}</td>
            <td>${genre}</td>
            <td>${age} years</td>
            <td>
              <button onclick="editBook(${index})">Edit</button>
              <button onclick="deleteBook(${index})">Delete</button>
            </td>
          </tr>
        `;
        bookTableBody.insertAdjacentHTML('beforeend', row);
      });
    };

    // Form Submission Handler
    bookForm.addEventListener('submit', (event) => {
      event.preventDefault();  // Prevent form refresh

      const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        year: parseInt(document.getElementById('year').value),
        isbn: document.getElementById('isbn').value,
        genre: document.getElementById('genre').value,
      };

      if (isValidForm(book)) {
        addBook(book);
        bookForm.reset();  // Clear the form
      }
    });
    