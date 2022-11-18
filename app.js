const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');
const { route } = require('./routes/admin.js');
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
}
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="message"><button type="submit">ADD PRODUCT</button></form>');

})
app.use('/product',(req,res,next)=> {
    console.log(req.body);//printing the request from client
    res.redirect('/');//redirecting to current route
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello From Express.js</h1>');
})
>>>>>>> aaa2620ac6dbda404cfeb7bbc1dce1a9b4f2acbd

app.listen(4000);
