//requiring express
const express = require('express');
 
//to handle the route and separate route and controller
const router = express.Router();
//requiring controller for home
const homeController = require('../controllers/home_controllers');

console.log('router loaded');
//get req for home
router.get('/',homeController.home);
//post req to add tasks
router.post('/desc',homeController.addTask);
//get req to delete tasks
router.get('/delete',homeController.deleteTask);




//to use in other js files
module.exports = router;