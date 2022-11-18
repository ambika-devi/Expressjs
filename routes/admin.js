//Backened
const express=require('express');
const router=express.Router();
//admin/add-product=> GET
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="message"><button type="submit">ADD PRODUCT</button></form>');

})
//admin/add-product=>POST
router.post('/add-product',(req,res,next)=> {
    console.log(req.body);//printing the request from client
    res.redirect('/');//redirecting to current route
})
module.exports=router;