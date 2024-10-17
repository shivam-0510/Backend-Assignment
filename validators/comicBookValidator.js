const Joi = require("joi");

const comicBookSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  author: Joi.string().min(3).max(100).required(),
  yearOfPublication: Joi.number()
    .integer()
    .min(1800)
    .max(new Date().getFullYear())
    .required(),
  price: Joi.number().positive().required(),
  discount: Joi.number().min(0).max(100).optional(),
  numberOfPages: Joi.number().positive().optional(),
  condition: Joi.string().valid("new", "used").required(),
  description: Joi.string().max(1000).optional(),
});

const validateComicBook = (data) => {
  return comicBookSchema.validate(data, { abortEarly: false });
};

module.exports = { validateComicBook };
