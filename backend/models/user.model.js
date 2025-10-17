import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchema= new mongoose.Schema({
  name:{
    type: String, 
    required: true
  },
  email:{
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ["customer", "restaurant"],
    default: "customer"
  },
  address: {
    type: String
  }
})
userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password= await bcrypt.hash(this.password,salt)
})

userSchema.method.matchPassword= async function(enterdPassword){
  return await bcrypt.compare(enterdPassword, this.password)
};
export default mongoose.model("User", userSchema)