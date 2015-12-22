'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;
/*
var fields = {
	title: { type: String },
	excerpt: { type: String },
	content: { type: String },
	active: { type: Boolean },
	created: { type: Date , default: Date.now }
};
*/

var fields = {
	titre: 			{ type: String },
	prix: 			{ type: String },
	date: 			{ type: String },
	surface: 		{ type: String },
	type: 			{ type: String },
	classe: 		{ type: String },
	equipement: { type: String },
	annonce: 		{ type: String },
	images:			{ type: String },
	//images: 		{ data: Buffer, contentType: String },

	created: { type: Date , default: Date.now }
};

var postSchema = new Schema(fields);

module.exports = mongoose.model('Post', postSchema);
