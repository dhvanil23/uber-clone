const express = require("express");
const userRouter = express.Router();
const { userLogin, userSignUp } = require('../controllers/userAuth.controller');
const { getUserProfile } = require('../controllers/userApi.controller');
const { userAuthorization } = require('../middlewares/auth.middleware');

userRouter.post("/auth/login", userLogin);

userRouter.post("/auth/signup", userSignUp);

userRouter.get("/api/profile/:id", userAuthorization, getUserProfile);


module.exports = userRouter