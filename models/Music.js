var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
   Model For Music
*/

var Music = new keystone.List('Music Video', {
   map: {name: 'title'},
   singular: 'Music Video',
   plural: 'Music Videos',
   autokey: {path: 'slug', from: 'title', unique: true},
});

Music.add({
   title: {type: String, required: true},
   videoId: {type: String},
   description: {type: Types.Html, wysiwyg: true, height: 300},
   image: {type: Types.CloudinaryImage},
   publishedDate: {type: Date, default: Date.now}
});

Music.register();