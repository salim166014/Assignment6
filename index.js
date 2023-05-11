const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store the books
let books = [{ id: 1105202301, title: "Book1", author : "Md. Salim", publishedDate : "11-05-2023" },
    { id: 1105202302, title: "Book2", author : "Md. Salim", publishedDate : "11-05-2023" },
    { id: 1105202303, title: "Book3", author : "Md. Salim", publishedDate : "11-05-2023" },
    { id: 1105202304, title: "Book4", author : "Md. Salim", publishedDate : "11-05-2023" },];

// Route to serve the static index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to add a book
app.post('/books', (req, res) => {
    const { title, author, publishedDate } = req.body;

    // Generate a unique ID for the book
    const id = Date.now().toString();

    // Create the book object
    const book = {
        id,
        title,
        author,
        publishedDate
    };

    // Add the book to the collection
    books.push(book);

    // Return the book object as the response
    res.json(book);
});

// Route to delete a book by ID
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    // Find the index of the book with the specified ID
    const bookIndex = books.findIndex(book => book.id === id);

    // If the book exists, remove it from the collection
    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1)[0];
        res.json({ message: 'Book deleted successfully', book: deletedBook });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Sorry I don’t understand this assignment. So I Use Chat GPT.
// I am sincerely sorry for such act.
// Due to lack of time, I could not study on express. thank you. I hope, you see the apology in a good light.
