const express = require("express");
const route = express.Router();
const Device = require("../controllers/devices");
const { protect } = require("../middleware/auth");

route
  .route("/")
  .post(protect, Device.saveDecives)
  .get(Device.getDevices);

module.exports = route;
