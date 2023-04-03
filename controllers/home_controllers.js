const TodoList = require("../models/task");

var task = [
   {
     taskName : "coding",
     taskDate : "31-01-2023",
     category : "study"
   },
   {
    taskName : "Gaming",
    taskDate : "01-04-2023",
    category : "game"
  }
 ];
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
module.exports.addTask = function(req,res){
  // console.log(req.body);
  // console.log(res);

  TodoList.create({
    taskName : req.body.name,
    taskCategory:req.body.category,
    taskDate : req.body.date
  }).then(()=>{
    return res.redirect('back');
  }).catch((err)=>{
    console.log(err);
  });
}
module.exports.deleteTask = function(req,res){

  //get the id from the url
 let id = req.query.id;
 //delete a contact
 TodoList.findByIdAndDelete(id).then(()=>{
  //if successfull then redirect back
  return "Deleted ID = " + id;
 }).catch((err)=>{
  //otherwise handle error
  console.log("error in deleting",err);
  
 }); 

}