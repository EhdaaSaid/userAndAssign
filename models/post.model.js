const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    taskTitle:{
        type:String,
        required:true,
       
        trim:true
    },
    taskContent:{
        type:String,
        required:true,
       
        trim:true
    },
    responset :[
        {
            emp:{},
            file:{}
        }
    ]
}, {timeStamps: true})

const task = mongoose.model('Task', taskSchema)
module.exports = task