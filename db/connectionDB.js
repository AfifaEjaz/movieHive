import mongoose from "mongoose";

const connectMongo = async (URL, dbName) => {
    try {
        await mongoose.connect(URL,{
            dbName: dbName 
        })
       console.log("Connected Successfully to MovieHive");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongo