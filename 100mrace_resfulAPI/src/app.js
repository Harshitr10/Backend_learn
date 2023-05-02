const express = require("express");
require("../src/db/conn");

const MensRanking =  require("../src/models/mens");
const router = require("./routers/men");
const app = express(); 

app.use(express.json());

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
})
