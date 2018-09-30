var keystone = require('keystone');

module.exports = function(req, res) {
   var view = new keystone.View(req, res);
   var locals = res.locals

   // Set locals
   locals.section = 'podcast';
   locals.page = 'Podcasts'

   // Load Video
   //var Videos = keystone.list('Music Video');
   
   //view.query('videos', Videos.model.find())
  
   // Render View
   view.render('videos');
};