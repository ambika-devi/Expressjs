//Frontened
const express=require('express');
const router=express.Router();
//shop/=>USE(to handle all requests)
router.use('/',(req,res,next)=>{
    res.send('<h1>Hello From Express.js</h1>');
})
module.exports=router;