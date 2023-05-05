const mongoose = requie("mongoose");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:Date,
        required: true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:tue
    },
    event:{
        type:String,
        default:"100m"
    }
})

const MensRanking = new mongoose.model("MenRanking",menSchema);

module.exports = MensRanking;

 