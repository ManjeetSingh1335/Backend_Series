import dotenv from "dotenv";
import connectDB from "./db/db_index.js";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.error("MONGODB.... Connection Failed:", error);
})






// Method1:-

// import express from "express";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";

// const app=express();

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("MongoDB connected successfully");


//         app.on("error", (error)=>{
//             console.error("EXPRESS ERROR:", error);
//             throw error;
//         });


//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.log("ERROR:", error);
//         throw error;
//     }
// })()