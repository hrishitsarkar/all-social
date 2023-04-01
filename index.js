const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const TodoList = require('./models/task');
//use express router
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',require('./routes'));
app.use(express.static('utils'));




app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err) console.log(`Error in running the server : ${err}`);
  console.log(`Server is running on port : ${port}`);
});