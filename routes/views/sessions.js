var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'sessions';
	locals.page = 'sessions'
	 // Load Video
	 var Sessions = keystone.list('Session');
   
	 view.query('videos', Sessions.model.find())

	// Render the view
	view.render('videos');
};
