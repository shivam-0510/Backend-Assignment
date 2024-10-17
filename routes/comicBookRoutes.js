const express = require("express");
const router = express.Router();
const comicBookController = require("../controllers/comicBookController");
const {
  validateComicBookInput,
} = require("../middleware/validationMiddleware");

// Routes
router.post("/", validateComicBookInput, comicBookController.createComicBook);
router.put("/:id", validateComicBookInput, comicBookController.updateComicBook);
router.delete("/:id", comicBookController.deleteComicBook);
router.get("/", comicBookController.getComicBooks);
router.get("/:id", comicBookController.getComicBookById);

module.exports = router;
