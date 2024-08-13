const express = require("express");
const router = express.Router();
const isAuth = true;

router.all("*",(req,res,next) => {
    if(isAuth){
        next();
    }else {
        res.json({success:false,message:"Not auth"})
    }
})

router.get("/", (req, res, next) => {
    res.json({
        deneme:"asd"
    })
})

module.exports = router;