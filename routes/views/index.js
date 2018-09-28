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

	var Enquiry = keystone.list('Enquiry');
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'index' }, function (next) {

		var newEnquiry = new Enquiry.model();
		var updater = newEnquiry.getUpdateHandler(req);
		
		console.log(req.body)

		updater.process(req.body, {
			flashErrors: true,
			fields: 'subscribe',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	// Render the view
	view.render('index');
};
