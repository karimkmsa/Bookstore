import bookModel from "../../../dataBase/models/book.model.js"
import ApiFeatures from "../../utils/ApiFeatures.js"



export const createBook = async (req, res, next) => {

   const result = await bookModel.create(req.body)

   res.status(201).json({ message: "blog added", result })


}
export const updateBook = async (req, res) => {
   let { id, title, author, price } = req.body
   const updatedBook =
      await bookModel.findByIdAndUpdate(
         id,
         { title, author, price },
         { new: true, runValidators: true }
      )

   if (!updatedBook) {
      return res.status(404).json({
         message: "Book not found"
      })
   }



}
export const deleteBook = async (req, res) => {
   try {

      let { id } = req.body
      let exist = await bookModel.findById(id)
      if (exist) {
         let deleted = await bookModel.findByIdAndDelete(id)
         res.status(200).json({ message: "book deleted", deleted })
      }
      if (!exist) {
         res.status(200).json({ message: "the book is already deleted" })

      }


   } catch (error) {
      res.status(500).json({ message: error.message })
   }





}
export const getAllBooks = async (req, res) => {
   try {

      const apiFeatures = new ApiFeatures(
         bookModel.find().populate("user"), req.query
      )
         .search()
         .filter()
         .sort()
         .pagination()
         .fields();

      const result = await apiFeatures.mongooseQuery;

      res.status(200).json({
         message: "Books Data",
         count: result.length,
         result,
      });

   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};
export const getBookById = async (req, res) => {
   let { id } = req.params



   let result = await bookModel.findById(id)
   if (!result) {
      return res.status(404).json({
         message: "Book not found"
      })
   }

   return res.status(200).json({
      message: "Book Data",
      result
   })

}