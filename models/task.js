const mongoose = require('mongoose');

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

const TodoList = mongoose.model('TodoList',taskSchema);

module.exports = TodoList;