const express = require("express");
// const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcome to the Message Board!" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
