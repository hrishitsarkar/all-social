//requiring the collections
const TodoList = require("../models/task");
//controller callback function for home
module.exports.home = function(req,res){
   TodoList.find({}).then((tasks) =>{
    return res.render('home',{
      //contexts
    title : "TODO App",
    taskList : tasks
    })
   }).catch((err)=>{
    console.log(err);
   })
    
}
//controller callback function for add task
module.exports.addTask = function(req,res){
//store in models
  TodoList.create({
    taskName : req.body.name,
    taskCategory:req.body.category,
    taskDate : req.body.date
  }).then(()=>{
    //if successfull redirect back
    return res.redirect('back');
  }).catch((err)=>{
    console.log(err);
  });
}
//controller callback function for delete task
module.exports.deleteTask = function(req,res){

  //get the id from the url
 let id = req.query.id;
 //delete a task
  TodoList.findByIdAndDelete(id).then(()=>{
    //sending response as a string
    res.send("Deleted ID = " + id);
   }).catch((err)=>{
    //otherwise handle error
    console.log("error in deleting",err);
    
   }); 
 }
 

