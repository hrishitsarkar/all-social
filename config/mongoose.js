//requiring mongoose
const mongoose = require('mongoose');

//handling errors
main().catch(err => console.log(err));

//connect to db
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_db');
}

//getting the connection

const db = mongoose.connection;
//success message
db.once('open',function(){
    console.log("connected to db");
});
//exporting values
module.exports = db;