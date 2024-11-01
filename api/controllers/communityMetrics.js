
const mongoose = require("mongoose")
const schema = new mongoose.Schema({ firstName: String, lastName: String });
const User = mongoose.model('User', schema);

module.exports = {
  index: async (req, res) => {
    const users = await User.find({});
    return res.json(users);
  }
};