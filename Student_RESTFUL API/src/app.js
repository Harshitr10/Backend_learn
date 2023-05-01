const express =  require("express");
require("./db/conn");
const Student = require("./models/students.js");
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.json())//incomig request is not recognised as json for that we need this function

app.get("/",(req,res) =>{
    res.send("Hello form the other side by harshit");
})

app.post("/students",async (req,res)=>{
    try{
        const user = new Student(req.body);
   const createUser= await user.save();
   res.status(201).send(user);

    }catch(e){
    res.status(404).send(e);
   }

})
 app.get("/students",async (req,res)=>{
    try{
        const studentsData= await Student.find();
     res.send(studentsData);
    }catch(e){
      res.send(e)
    }
 })

 //get individual data

 app.get("/students/:id", async(req,res)=>{
    try{

    
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    console.log(studentData);
    if(!studentData){
        return res.status(400).send();
    }
    else{
        res.send(studentData);
    }



    }catch(e){
        res.status(500).send(e);
    }
    
 })


app.listen(port,()=>{
    console.log(`listening to port ${port}`); 
})  