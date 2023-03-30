const express = require('express');
 
//to handle the route and separate route and controller
const router = express.Router();

const homeController = require('../controllers/home_controllers');

console.log('router loaded');

router.get('/',homeController.home);

//to use in other js files
module.exports = router;