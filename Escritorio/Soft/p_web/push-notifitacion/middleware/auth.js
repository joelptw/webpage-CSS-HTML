const jwt = require("jsonwebtoken");
const User = require("../models/users");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.header("x-auth-token") &&
    req.header("x-auth-token").startsWith("Bearer")
  ) {
    token = req.header("x-auth-token").split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ msg: "No autorizado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error" });
  }
};
