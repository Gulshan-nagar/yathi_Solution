import mongoose from "mongoose"
const menuItemSchema= new mongoose.Schema({
  name:{
    type: String, 
    required: true
  },
  price:{
    type: String,
    required: true, 
  },
  category: {
    type: String,
  },
  description:{
    type: String,
  },
 
})
const restaurantSchema= new mongoose.Schema({
   name:{
    type: String, 
    required: true
  },
 
  description:{
    type: String,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  menu: [menuItemSchema],
  deleveryTime:{
    type: String
  }
})