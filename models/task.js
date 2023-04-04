//requiring mongoose
const mongoose = require('mongoose');
//creating schema
const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required : true
    },
    taskDate:{
        type:String,
        required : true
    },
    
     taskCategory:{
        type:String,
        required : true
        }
});


//creating collections
const TodoList = mongoose.model('TodoList',taskSchema);
//exporting
module.exports = TodoList;