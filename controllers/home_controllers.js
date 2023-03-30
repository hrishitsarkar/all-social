module.exports.home = function(req,res){
   return res.render('home',{
    //contexts
    title : "Home"
   });
}

