const express =  require("express");
require("./db/conn");
const Student = require("./models/students.js");
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.json())//incomig request is not recognised as json for that we need this function

app.get("/",(req,res) =>{
    res.send("Hello form the other side by harshit");
})

app.post("/students",(req,res)=>{
   console.log(req.body);
   const user = new Student(req.body);
   user.save().then(()=>{
    res.status(201).send(user);
   }).catch((e)=>{
    res.status(404).send(e);
   })

})

app.listen(port,()=>{
    console.log(`listening to port ${port}`); 
})  