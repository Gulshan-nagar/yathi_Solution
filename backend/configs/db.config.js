import mongoose from "mongoose"

const dbConnection= async()=> {
  try {
    await  mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected succsufly")
  } catch (error) {
    console.log("somthing wrong in connection", error)
  }
};
export default dbConnection