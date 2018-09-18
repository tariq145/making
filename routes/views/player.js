var keystone = require('keystone');

exports = module.exports = function(req, res) {
   var view = new keystone.View(req, res);
   var locals = res.locals
   
   // Set locals
   locals.section = 'player';
   locals.params = req.params.id;
   locals.data = {
      main: [],
      videos: []
   };

   view.on('init', function(next){
      let videos_query = keystone.list('Music Video').model.find();

      let main_query = keystone.list('Music Video').model.findOne({
         slug: locals.params
      });

      videos_query.exec(function(err, result){
         locals.data.videos = result;
      });

      main_query.exec(function(err, result){
         locals.data.main = result;
         next(err);
      });
   });

   view.render('player');
};