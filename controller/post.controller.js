const Task = require('../models/post.model')
const User = require('../models/user.model')
const addTask = async(req, res)=>{
    try{
        const task = new Task({
            ...req.body,
            userId: req.user._id

        })
        //res.send(req.user.position)
        if(req.user.position != "manager") {throw new Error("you dont manager")}
        else{
        await task.save()
        res.status(200).send( { apiStatus:true, data:task, message:"data added"})
        }
    }
    catch(e){
        res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const assignTask= async (req,res)=>{
    try{
        if(req.user.position != "manger") {throw new Error ("you dont an Emp")}
        taskId = req.params.id
        const task = await Task.findById(taskId)
        if(!task) res.send('task not found')
        const assigned = await User.findOne({_id:req.body.empId, position:"emp"})
        if(!assigned) res.send('emp not found')
        task.assigned = req.body.empId
        await task.save()
        res.status(200).send( { apiStatus:true, data:req.user.myTasks, message:"task Ass"})
    }
    catch(e){
    res.status(500).send({ apiStatus:false, data:e.message, message: "error adding post data" })
    }
}

const addPImg = async(req, res)=>{
    res.status(200).send({data:'uploaded'})
}


module.exports = {addTask, assignTask , addPImg}