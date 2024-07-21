import movieModel from "./model.js";

// export function createMovie(req, res){
// console.log("movie created ");

// const { title, overview, genre, poster_path } = req.body
//     console.log(title, overview, genre);
// }

// create expense
export async function createMovie(req, res) {
    console.log("movie created ");

    const { title, overview, genre, poster_path } = req.body
        console.log(title, overview, genre);

    if (!title, !overview, !genre, !poster_path) {
        res.json({
            message: "Missing Required Fields"
        })
    }
    else {
        try {
            await movieModel.create({ title, overview, genre, poster_path })
            const result = await movieModel.find()
            console.log("Movie created")
            res.status(201).json({
                message: "Movie created Successfully",
                result
            })
        } catch (error) {
            console.error("Error during movie creation:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

//Get Movie
export async function getMovie(req, res) {
    try {
        const result = await movieModel.find()
        console.log("movies fetched")
        res.status(201).json({
            message: "movies fetched Successfully",
            result
        })
    } catch (error) {
        console.error("Error fetching movies:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

// //update Movie
export async function updateMovie(req, res) {
    const { _id, title, overview, genre, poster_path } = req.body
    const filter = { _id }
    const update = { title, overview, genre, poster_path }

    if (!title, !overview, !genre, !poster_path) {
        res.json({
            message: "Missing Required Fields"
        })
    }
    else {
        try {
            await movieModel.findOneAndUpdate(filter, update, { new: true })
            const result = await movieModel.find()
            console.log("movie updated")
            res.status(201).json({
                message: "movie updated Successfully",
                result
            })
        } catch (error) {
            console.error("Error updating movie:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}

// //Delete Expense
export async function deleteMovie(req, res) {
    const { _id } = req.body

        try {
            await movieModel.deleteOne({_id})
            const result = await movieModel.find()
            console.log("movie Deleted")
            res.status(201).json({
                message: "movie deleted Successfully",
                result
            })
        } catch (error) {
            console.error("Error deleting movie:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    
}