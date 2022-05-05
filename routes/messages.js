const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { validationResult, check } = require("express-validator");

const User = require("../models/User");
const Message = require("../models/Message");

//@route		GET api/contacts
//@desc		Get all users contacts
//@access	Private
router.get("/", auth, async (req, res) => {
	try {
		const messages = await Message.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(messages);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

//@route		POST api/message
//@desc		add new message
//@access	Private
router.post(
	"/",
	[auth, [check("post", "Message is required").not().isEmpty()]],
	async (req, res) => {
		//res.send("Add message");
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { post, date } = req.body;

		try {
			const newMessage = new Message({
				post,
				date,
				user: req.user.id
			});
			const message = await newMessage.save();
			res.json(message);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

//@route		PUT api/contacts/:id
//@desc		Update contact
//@access	Private
router.put("/:id", (req, res) => {
	res.send("Update contact");
});

//@route		DELETE api/contacts/:id
//@desc		Delete contact
//@access	Private
router.delete("/:id", (req, res) => {
	res.send("Delete contact");
});

module.exports = router;
