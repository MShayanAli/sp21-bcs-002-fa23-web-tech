import { User } from "../models/Users.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


export  const Login = async(req,res)=>{

   const {email,password} = req.body;
   const user = await User.findOne({email}).select("+password")
   if(!user)
   {
    return res.status(404).json({
        success:false,
        msg:"User Not Exists"
    })
   }
   const isMatched = await bcrypt.compare(password,user.password)
   if(!isMatched)
   {
    return res.status(404).json({
        success:false,
        msg:"Invalid Password"
    })
   }
   
   const Logintoken = jwt.sign({_id:user._id},JWT_TOKEN)
   res.cookie("token",Logintoken,{httpOnly:true,expires:new Date(Date.now()+10*60*1000)})
    
    return res.json({
        success:true
     })
 
       
};
export const Signup = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({
        success: false,
        msg: "User Already Exists",
      });
    }
   else{
    const hashedPassword = await bcrypt.hash(password,10);
  
    user = await User.create({
      name,
      email,
      password:hashedPassword
    });
    const Signuptoken = jwt.sign({_id:user._id},JWT_TOKEN)
    res.cookie("token",Signuptoken,{httpOnly:true,expires:new Date(Date.now()+10*60*1000)})

    return res.json({
       success:true
    })

   }
  };
  export const Logout = (req,res)=>{
    res.status(200).cookie("token",null,{expires:new Date(Date.now())}).json({success:true})
  }