var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = '';

	var Videos = keystone.list('Music Video');
	var Collaborators = keystone.list('Collaborator');
	view.query('videos', Videos.model.find());
	view.query('collaborators', Collaborators.model.find());

	// Render the view
	view.render('index');
};
