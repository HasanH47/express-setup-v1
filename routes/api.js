const express = require("express");
const AuthRoutes = require("./auth");
const UserRoutes = require("./user");
const router = express.Router();

router.use(AuthRoutes);

router.use(UserRoutes);

module.exports = router;
