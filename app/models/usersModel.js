var mongoose 	= require('mongoose');
var schema		= mongoose.schema;

var usersSchema = new schema({
	name 			: String,
	email			: String,
	username		: String,
	pwd 			: String,
	description		: String,
	site 			: String,
	portfolio		: String,
	votes			: Number,
	articles_count	: Number
});

var User = mongoose.model('User', usersSchema);

exports.user = this.User;