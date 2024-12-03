const express = require("express");
const userRouter = express.Router();
const {userLogin, userSignUp} = require('../controllers/userAuth.controller');

userRouter.post("/auth/login", userLogin);

userRouter.post("/auth/signup", userSignUp);

module.exports = userRouter