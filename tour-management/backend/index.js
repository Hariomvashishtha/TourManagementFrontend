import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import tourRoute from './Routes/tours.js';
dotenv.config();
const app = express();

// middle ware function 
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


                        
const DB = process.env.MONGO_URI ;
mongoose.set('strictQuery', false);
// mongoose.connect(DB).then(() => {
//     console.log("Database connected successfully");
// }).catch((err) => {
//     console.log("Error while connecting with database", err);
// });
const connet=async()=>{
    try{
        await mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true, dbName :"TourDataBase"});
        console.log("Database connected successfully");
    }
    catch(err){
        console.log("Error while connecting with database", err);
    }
}




const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("apis are working");
});
app.use("/tours", tourRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connet();
});