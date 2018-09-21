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
         if(result == null){
            return res.status(404).send(keystone.wrapHTMLError('Sorry, no page could be found at this address (404)'));
         }
         locals.data.main = result;
         next(err);
      });
   });

   view.render('player');
};