const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// ✅ GET: Retrieve all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ POST: Add a new book
router.post('/add', async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const newBook = new Book({ title, author, price });
        await newBook.save();
        res.json({ message: "Book added successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ DELETE: Remove a book by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: "Book deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ UPDATE: Update a book
router.put('/update/:id', async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, author, price }, { new: true });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
