//requiring express
const express = require('express');
//starting app
const app = express();
//port number
const port = 8000;
//using body parser
const bodyParser = require('body-parser');
//requring database
const db = require('./config/mongoose');

//requiring models
const TodoList = require('./models/task');

app.use(bodyParser.urlencoded({extended:false}));
//use express router
app.use('/',require('./routes'));
//adding html, css and js files
app.use(express.static('utils'));



//setting the view engine
app.set('view engine','ejs');
//connecting views
app.set('views','./views');

//starting the server
app.listen(port,function(err){
    if(err) console.log(`Error in running the server : ${err}`);
  console.log(`Server is running on port : ${port}`);
});