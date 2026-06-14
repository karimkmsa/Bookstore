import { body } from "express-validator";

export const createBookValidation = [

  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("author")
    .notEmpty()
    .withMessage("Author is required"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("isbn")
    .notEmpty()
    .withMessage("ISBN is required"),

  body("publishedDate")
    .notEmpty()
    .withMessage("Published date is required")
    .isISO8601()
    .withMessage("Date must be in YYYY-MM-DD format"),
    body("user")
  .optional()
  .isMongoId()
  .withMessage("Invalid user id")

];
export const updateBookValidation = [

  body("title")
    .optional()
    .isString()
    .withMessage("Title must be string"),

  body("author")
    .optional()
    .isString()
    .withMessage("Author must be string"),

  body("price")
    .optional()
    .isNumeric()
    .withMessage("Price must be number"),

  body("publishedDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid date format"),
 body("user")
  .optional()
  .isMongoId()
  .withMessage("Invalid user id")

];
