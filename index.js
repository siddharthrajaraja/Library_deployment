var express =require('express')

const app =express()
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
const path=require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.listen(process.env.PORT || 9000)
