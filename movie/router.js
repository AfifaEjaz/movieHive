import express from 'express'
const router = express.Router()
import { createMovie, getMovie, updateMovie, deleteMovie } from "./controller.js";

router.get("/allmovies", getMovie)
router.post("/addmovie", createMovie)
router.post("/updatemovie", updateMovie)
router.post("/deletemovie", deleteMovie)

export default router

