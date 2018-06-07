/*
 * Restaurants Router
 */

var express = require('express'),
	router = express.Router(),
	ctrlRestaurants = require('../controllers/restaurant.controller.js');



// routes
router.get('/restaurants', ctrlRestaurants.listAll);
router.get('/restaurants/:restaurantid', ctrlRestaurants.listById);
router.post('/restaurants/', ctrlRestaurants.createRestaurant);
router.delete('/restaurants/:restaurantid', ctrlRestaurants.deleteRestaurant);


module.exports = router;
