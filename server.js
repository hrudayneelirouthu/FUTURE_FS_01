const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGO_URI")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", MessageSchema);

app.post("/contact", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.json({ success: true });
});

app.get("/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.listen(5000, () => console.log("Server running on 5000"));
