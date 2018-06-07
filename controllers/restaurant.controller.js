/*
 * Restaurant controller
 */
require('../models/restaurants.js');
var mongoose = require('mongoose'),
	Restaurant = mongoose.model('Restaurant');

module.exports.listAll = function listAll (req, res) {
	Restaurant.find().exec(function (err, data) {
		res.status(200);
		res.json(data);
	});
};

module.exports.listById = function listById (req, res) {
	if (req.params && req.params.restaurantid) {
		Restaurant.findById(req.params.restaurantid).exec(function (err, restaurant) {
			if (!restaurant) {
				res.status(404);
				res.json({ mesage: 'Restaurant not found'});
				return;
			} else if (err) {
				res.status(404);
				res.send(err);
				return;
			}
			res.status(200);
			res.json(restaurant);
		});	
	} else {
		res.status(404);
		res.json({ mesage: 'No restaurant id in request'});
	}
};

module.exports.createRestaurant = function createRestaurant (req, res) {
	var restaurant = new Restaurant();

	restaurant.name = req.body.name;
	restaurant.email = req.body.email;
	restaurant.phone = req.body.phone;

	restaurant.save(function (err) {
		if (err) {
			res.status(404);
			res.send(err);
		} else {
			res.status(201);
			res.json(restaurant);
		}
	});
};

module.exports.deleteRestaurant = function deleteRestaurant (req, res) {
	var restaurantid = req.params.restaurantid;
	if (restaurantid) {
		Restaurant.findByIdAndRemove(restaurantid).exec(function (err, restaurant) {
			if (err) {
				res.status(404);
				res.send(err);
				return;
			}
			res.status(204);
			res.json(restaurant);
		});
	} else {
		res.status(404);
		res.json({ message: 'No restaurant id'});
	}
};








