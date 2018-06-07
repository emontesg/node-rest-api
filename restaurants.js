/*
 * Restaurants Router
 */

var express = require('express'),
	router = express.Router(),
	ctrlRestaurants = require('../controllers/restaurant.controller.js');



// routes
router.get('/restaurants', ctrlRestaurants.listAll);


module.exports = router;
