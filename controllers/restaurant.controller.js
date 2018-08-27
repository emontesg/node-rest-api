/*
 * Restaurant controller
 */
require('../models/restaurants.js');
var mongoose = require('mongoose'),
	Restaurant = mongoose.model('Restaurant');

module.exports.listAll = (req, res) => {
	Restaurant.find().exec(function (err, data) {
		res.status(200);
		res.json(data);
	});
};

module.exports.listById =  (req, res) => {
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

module.exports.createRestaurant = (req, res) => {
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

module.exports.deleteRestaurant = (req, res) => {
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
module.exports.updateRestaurant = (req, res) => {
	var restaurantid = req.params.restaurantid;
	var updateRestaurant = {
		name : req.body.name,
		phone : req.body.phone,
		email: req.body.email
	}
	if (restaurantid) {
		Restaurant.findByIdAndUpdate(restaurantid, {$set : updateRestaurant}).exec(function (err, restaurantUpdated) {
			if (err) {
				res.status(404);
				res.send(err);
				return;
			}
			res.status(202);
			res.json(restaurantUpdated);
	
		});
	} else {
		res.status(404);
		res.json({ message: 'No restaurant id'});
	}
};








