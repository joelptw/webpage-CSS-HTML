const express = require("express");
const route = express.Router();
const User = require("../controllers/users");

route
  .route("/")
  .post(User.createUser)
  .get(User.getUsers);

module.exports = route;
