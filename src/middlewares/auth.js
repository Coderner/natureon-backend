const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
  try{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message:"Unauthorized!"});
    }

    const token = authHeader.split(" ")[1];
    console.log(token);

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log(decoded);

    req.user = {
        userId: decoded.userId,
        role: decoded.role
    };

    next();
  }catch(err){
     return res.status(401).json({message:"Unauthorized!"});
  }
}

module.exports = authMiddleware;
