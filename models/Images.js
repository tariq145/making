var keystone = require('keystone');
var Types = keystone.Field.Types;

var Image = new keystone.List('Image', {
   map: {name: 'name'},
   singular: 'Image',
   plural: 'Imagess',
   autokey: {path: 'slug', from: 'name', unique: true},
});

Image.add({
   name: {type: String, required: true},
   image: {type: Types.CloudinaryImage},
});

Image.register();