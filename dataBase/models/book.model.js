import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        author: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        isbn: {
            type: String,
            required: true,
            unique: true
        },

        publishedDate: {
            type: Date,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }

    },
    {
        timestamps: true,
    }
)
















const bookModel = mongoose.model("Book", bookSchema);


export default bookModel;