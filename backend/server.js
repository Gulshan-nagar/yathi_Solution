import express from "express"
import userRoutes from "./routes/user.route.js"
import cors from "cors"
import dotenv from "dotenv"
import dbConnection from "./configs/db.config.js"
dotenv.config()
const app= express()
app.use(cors())
app.use(express.json())
app.use("/api/users", userRoutes)
const PORT= process.env.PORT || 8080

dbConnection()
app.listen(PORT, ()=>{
  console.log("port is listioning on 8000")
})