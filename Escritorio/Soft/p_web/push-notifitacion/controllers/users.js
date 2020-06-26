const User = require("../models/users");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    console.log(req.body);

    res.status(200).json(user);
  } catch (error) {
    console.error(err);
    return res.status(400).json({ msg: "Server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ msg: "Server error" });
  }
};
