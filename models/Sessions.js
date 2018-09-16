var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
   Model For Sessions
*/

var Session = new keystone.List('Session', {
   map: {name: 'title'},
   singular: 'Session',
   plural: 'Sessions',
   autokey: {path: 'slug', from: 'title', unique: true},
});

Session.add({
   title: {type: String, required: true},
   videoId: {type: String},
   description: {type: Types.Html, wysiwyg: true, height: 300},
   image: {type: Types.CloudinaryImage},
   publishedDate: {type: Date, default: Date.now}
});

Session.register();