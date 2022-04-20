import express from 'express';
import mongoose from "mongoose";
import Bank from "./Bank.js";
import router from "./router.mjs";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const password = process.env.PASSWORD;


const DB_URL = `mongodb+srv://user:${password}@cluster0.mhzgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();


app.use(express.json());
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();