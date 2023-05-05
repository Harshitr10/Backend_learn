const express = require ("express");
const path =require("path");
const app = express();
require("./db/conn");

const static_path = path.join(__dirname,"../public"); 
app.use(express.static(static_path));




const port  = process.env.PORT ||  3000;

app.set('views', path.join(__dirname,"../"));
app.set('view engine', 'hbs');


app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
    
})