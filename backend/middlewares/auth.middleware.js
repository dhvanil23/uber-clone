const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");
const driverModel = require("../models/drivers.model");
const blacklistedTokenModel = require("../models/blacklistedToken.model");

require('dotenv').config();

module.exports.userAuthorization = async function (req, res, next) {
    const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1]
    const isTokenBlackListed = await blacklistedTokenModel.findOne({token:token});

    if (!token || isTokenBlackListed) {
        return res.status(401).json({ message: "Unauthorized to access this page. Do login first!!!" })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("decoded:",decoded)
        req.user = await userModel.findById(decoded._id)
        return next();
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({ message: "Unauthorized to access this page" });
    }
}

module.exports.driverAuthorization = async function (req, res, next) {
    const token = req?.cookies?.token || req?.headers?.authorization?.split(' ')[1]
    const isTokenBlackListed = await blacklistedTokenModel.findOne({token:token});
    
    if (!token || isTokenBlackListed) {
        return res.status(401).json({ message: "Unauthorized to access this page. Do login first!!!" })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await driverModel.findById(decoded._id);
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: "Unauthorized to access this page" });
    }
}