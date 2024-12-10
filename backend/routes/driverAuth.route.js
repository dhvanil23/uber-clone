const express = require("express");
const driverRouter = express.Router();
const {driverSignUp, driverLogin, driverLogout} = require('../controllers/driverAuth.controller');
const { driverAuthorization } = require("../middlewares/auth.middleware");

driverRouter.post("/auth/login", driverLogin);

driverRouter.post("/auth/signup", driverSignUp);

driverRouter.post("/auth/logout", driverAuthorization, driverLogout)

module.exports = driverRouter