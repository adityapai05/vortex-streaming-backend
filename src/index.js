import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})
connectDB()
.then( () => {
    const server = app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT || 8000}`)
    })
    server.on("error", (error) => {
        console.error("Server Error: ", error);
    })
})
.catch((err) => {
    console.error("MongoDB Connection Failed: ", err)
})