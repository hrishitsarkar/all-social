var task = [
   {
     taskName : "coding",
     taskDate : "31-01-2023",
     category : "study"
   }
 ];
module.exports.home = function(req,res){
   return res.render('home',{
    //contexts
    title : "TODO App",
    taskList : task
   });
}


