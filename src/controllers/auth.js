const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleSignUp (req,res){
   try{
     const {email, password} = req.body;

     if(!email || !password){
       return res.status(400).json({
         success:false,
         message:"Email and password fields are required!"
      });
     }

     const emailNormalized = email.toLowerCase().trim();

     const existingUser = await User.findOne({email: emailNormalized});
     console.log(existingUser);

     if(existingUser){
       return res.status(400).json({
         success:false,
         message:"User Already Exists!"
      });
     }

     const passwordHash = await bcrypt.hash(password, 10);

     const newUser = await User.create({
        email: emailNormalized,
        passwordHash,
        role: "USER"
     });

     const payload = {
      userId: newUser._id,
      role: newUser.role,
    };

    const token = jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN });

     const user = {
        _id : newUser._id,
        email : newUser.email,
        role: newUser.role,
        createdAt: newUser.createdAt
     }

     return res.status(201).json({
        success:true,
        message:"User Created Successfully!",
        data: {
         token,
         user
        },
     });

   }catch(err){
     console.log(err);
     return res.status(500).json({
      success:false,
      message: "Signup Failed!"
     });
   }
}

async function handleLogin (req, res){
   try{
       const {email,password} = req.body;

       if(!email || !password){
          return res.status(400).json({
            success:false,
            message:"Email and Password fields are required!"
         });
       }

       const emailNormalized = email.toLowerCase().trim();

       const user = await User.findOne({email: emailNormalized});

       if(!user){
          return res.status(401).json({
            success:false,
            message:"Invalid Credentials!",
         });
       }

       const isMatch = await bcrypt.compare(password,user.passwordHash);
       if(!isMatch){
          return res.status(401).json({message:"Invalid Credentials!"});
       }

       const payload = {
         userId: user._id,
         role: user.role 
       };

       const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
       
       return res.status(200).json({
         success:true,
         message: "Login Successful",
         data: {
            token,
            user : {
            _id : user._id,
            email : user.email,
            role: user.role,
            createdAt: user.createdAt
         }
         },
         error:null
       });
       
   }catch(err){
       return res.status(500).json({
         success:false,
         message: "Login Failed!"
      });
   }
}

module.exports = {
    handleLogin,
    handleSignUp
}