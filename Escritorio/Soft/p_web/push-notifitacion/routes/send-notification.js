const serviceAccount = require("../service-account.json");
const Device = require("../models/devices");
const User = require("../models/users");
const admin = require("firebase-admin");
const express = require("express");
const route = express.Router();
const { protect } = require("../middleware/auth");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

route.post("/", protect, async (req, res) => {
  try {
    const { message, email } = req.body;

    const dest = await User.findOne({ email }).select("_id");

    const device = await Device.findOne({ user: dest }).select("token");

    const userName = await User.findById(req.user.id).select("email");

    const payload = {
      data: {
        notification: {
          title: `${userName.email} dice: `,
          body: `${message}`,
          icon: "/ab-logo.png"
        }
      }
    };

    const options = {
      priority: "high"
    };

    admin
      .messaging()
      .sendToDevice(device.token, payload.data, options)
      .then(response => {
        console.log("Push sent successfully", response);
        console.log(
          `from ${payload.data.title} to ${email} says ${payload.data.body}`
        );
      })
      .catch(err => {
        console.log("Error occurred while sending push", err);
      });

    res.json({
      mgs: `${payload.data.notification.title} a  ${email} :  ${payload.data.notification.body}`
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json("server error");
  }
});

module.exports = route;

//export GOOGLE_APPLICATION_CREDENTIALS="/home/joelp/Escritorio/Soft/p_web/push-notifitacion/service-account.json"
