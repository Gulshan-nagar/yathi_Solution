import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const router= express.Router();

const generateToken= (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET || "secret",{
    expiresIn: "3d",
  });
};

// resiter
router.post('/register', async(req, res)=>{
  try {
    const {name, email,password, role, address}= req.body;

    const userExists= await User.findOne({email})
    if(userExists){
      return res.status(400).json({message: "User alredy resiter"})
    }
    const user= await user.create({
      name,
      email,
      password,
      role, 
      address
    });
    if(user){
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      })
    }
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})
router.post("/login", async(req, res)=>{
  try {
    const {email, password}= req.body;
    const user= await User.findOne({email})
    if(user && (await user.matchPassword(passord))){
      res.json({
         _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      })
    }
    else{
      res.status(401).json({message: "invalid email or passowrd"})
    }
  } catch (error) {
          res.status(401).json({message: error.message})

  }
})
export default router