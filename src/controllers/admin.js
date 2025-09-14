function handleAdminLogin(req,res){

    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
       return res.json({ 
        success: true, 
        message: "Login successful",
        data:{},
        error: null 
       });
    }

    return res.json({
        success:false, 
        message:"Login Failed!",
        data: {},
        error: null
     });
}

module.exports = {handleAdminLogin};