/*
 * Restaurant controller
 */

var mongoose = require('mongoose'),
	Restaurant = mongoose.model('Restaurant');

module.exports.listAll = function listAll (req, res) {
	Restaurant.find().exec(function (err, data) {
		res.status(200);
		res.json(data);
	});
};