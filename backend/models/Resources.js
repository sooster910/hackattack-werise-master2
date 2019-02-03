const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
	// user: {
	// 	type: Schema.Types.ObjectId, ref: 'users'
	// },
	title: {
		type: String,
		require: true
	},
	link: {
		type: String,
		require: true
	},
	image: {
		type:String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	category: {
		type: String,
		require: true
	}
});

module.exports = Resource = mongoose.model('resource1', ResourceSchema);
