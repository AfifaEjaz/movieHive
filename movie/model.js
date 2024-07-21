import { mongoose, Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    }
})

const movieModel = model("movie", movieSchema)
export default movieModel