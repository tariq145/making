var keystone = require('keystone');

module.exports = function(req, res) {
   var view = new keystone.View(req, res);
   var locals = res.locals

   // Set locals
   locals.section = 'our-work';
   locals.page = 'Our Work'

   // Load Video
   var Videos = keystone.list('Music Video');
   
   view.query('videos', Videos.model.find())
   // Videos.model.find()
   // .limit(1)
   // .exec()
   // .then(function(videos){
   //    console.log(videos);
   // }, function(err) {
   //    throw err;
   // }).
   // then(function(result) {
   //    console.log(result);
   // }, function(err) {
   //    console.log(err);
   // });

   // Render View
   view.render('videos');
};