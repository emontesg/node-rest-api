/*
 * Restaurant Model
 */
var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: String,
	phone: Number
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;

