var express = require('express'),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	dbURI = 'mongodb://localhost:27017/food',
	port = 3000,
	app = express(),
	restaurantRouter = require('./routes/restaurants.js');

mongoose.connect(dbURI);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', restaurantRouter);

// logger middleware
app.use(logger('short'));

app.use(function (req, res) {
	res.status(404).send('The resource ' + req.url + ' does not exist...');
});

app.listen(port, function () {
	console.log('App running on port 3000');
});
