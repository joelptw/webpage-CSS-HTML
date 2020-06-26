const Devices = require("../models/devices");

exports.saveDecives = async (req, res) => {
  const { token } = req.body;

  try {
    const device = await Devices.create({
      user: req.user.id,
      token
    });

    res.status(200).json({device});
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: "server error." });
  }
};

exports.getDevices = async (req, res) => {
  try {
    const devices = await Devices.find().populate("user", ["email"]);

    res.status(200).json({ devices });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: "server error." });
  }
};
