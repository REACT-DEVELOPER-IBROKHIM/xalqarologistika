const jwt = require("jsonwebtoken");
require('dotenv/config');

function varify_admin(req, res, next){
    const adminToken = req.header("Authorization");
    if(!adminToken){
        return res.status(403).json({
            message: "You dont have access!"
        });
    }
    else{
        try{
            const decoded = jwt.verify(adminToken.split(" ")[1], process.env.TOKEN_SECRET_KEY)
            req.admin = decoded;
            next(); 
        }
        catch(err){
            res.status(401).json({
              message: "Token is not valid!"
            })
        }
    }
}

module.exports = varify_admin;