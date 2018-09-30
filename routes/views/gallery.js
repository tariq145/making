var keystone = require('keystone');

module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	// Render the view
	view.render('gallery');

};
