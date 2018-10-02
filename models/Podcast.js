var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
   Model For Podcasts
*/

var Podcast = new keystone.List('Podcast', {
   map: {name: 'title'},
   singular: 'Podcast',
   plural: 'Podcasts',
   autokey: {path: 'slug', from: 'title', unique: true},
});

Podcast.add({
   title: {type: String, required: true},
   videoId: {type: String},
   description: {type: Types.Html, wysiwyg: true, height: 300},
   image: {type: Types.CloudinaryImage},
   publishedDate: {type: Date, default: Date.now}
});

Podcast.register();