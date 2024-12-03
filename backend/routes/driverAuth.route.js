const express = require("express");
const driverRouter = express.Router();
const {driverSignUp, driverLogin} = require('../controllers/driverAuth.controller');

driverRouter.post("/auth/login", driverLogin);

driverRouter.post("/auth/signup", driverSignUp);

module.exports = driverRouter