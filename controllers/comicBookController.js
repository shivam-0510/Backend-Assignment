const ComicBook = require("../models/comicBook");

// Create Comic Book
exports.createComicBook = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Edit Comic Book
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.json(comicBook);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete Comic Book
exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.json({ message: "Comic book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Fetch Inventory List
exports.getComicBooks = async (req, res) => {
  const { page = 1, limit = 10, author, year, price, condition } = req.query;

  try {
    let filters = {};
    if (author) filters.author = author;
    if (year) filters.yearOfPublication = year;
    if (price) filters.price = price;
    if (condition) filters.condition = condition;

    const comicBooks = await ComicBook.find(filters)
      .sort({ createdAt: -1 }) // Sort by creation date, descending
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await ComicBook.countDocuments(filters);

    res.json({ total, page, limit, comicBooks });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get Comic Book Details
exports.getComicBookById = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.json(comicBook);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
