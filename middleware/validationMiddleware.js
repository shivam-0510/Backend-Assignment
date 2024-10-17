const { validateComicBook } = require("../validators/comicBookValidator");

exports.validateComicBookInput = (req, res, next) => {
  const { error } = validateComicBook(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res
      .status(400)
      .json({ message: "Validation error", errors: errorMessages });
  }
  next();
};
