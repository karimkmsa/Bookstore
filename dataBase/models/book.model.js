import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String


        },
        author: {
            type: String


        },
        price: {
            type: Number


        },
        isbn: {
            type: String



        },
        publishedDate: {
            type: Date



        }




    }
    ,
    {
        timestamps: true,
    }










)

const bookModel = mongoose.model("Book", bookSchema);


export default bookModel;