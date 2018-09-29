var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
   Model For Music
*/

var Collaborator = new keystone.List('Collaborator', {
   map: {name: 'name'},
   singular: 'Collaborator',
   plural: 'Collaborators',
   autokey: {path: 'slug', from: 'name', unique: true},
});

Collaborator.add({
   name: {type: String, required: true},
   url: {type: String},
   image: {type: Types.CloudinaryImage},
});

Collaborator.register();