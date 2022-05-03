const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
	//get from a specific user to only get the contacts from specific user
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	message: {
		type: String,
		required: true
	},

	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("message", ContactSchema);
