import express from "express";
import{ createBook, deleteBook,getAllBooks,updateBook,getBookById } from "./book.controller.js"
import { validate } from "../../middleware/validation.js";
import { createBookValidation, updateBookValidation } from "../../middleware/book.validation.js";





const router = express.Router()


router.post("/Add-Book",createBookValidation, validate, createBook)
router.delete("/delete-Book",deleteBook)
router.put("/update-Book",updateBookValidation,validate,updateBook)
router.get("/",getAllBooks)
router.get('/:id',getBookById)


export default router