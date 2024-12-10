const { matchPassword, generateAuthToken } = require("../services/authHelper.service");
const driverModel = require('../models/drivers.model');
const { driverCreate } = require('../services/driverModel.service');
const blacklistedTokenModel = require("../models/blacklistedToken.model");

module.exports.driverSignUp = async (req, res) => {
    try {
        const body = req.body;
        const driverData = await driverModel.find({
            email: body.email
        })
        console.log('driverdata', driverData)
        if (driverData.length > 0) {
            res.status(409).json({ error: `Driver already exists with ${body.email}` });
        }
        else {
            const newdriver = await driverCreate(body);
            console.log('newdr',newdriver)
            const token = generateAuthToken({_id: newdriver._id});
            res.cookie('token', token);
            res.status(201).json({ token, newdriver });
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports.driverLogin = async (req, res) => {
    try {
        const body = req.body;
        const driverData = await driverModel.findOne({
            email: body.email
        }).select('+password')
        if (!driverData) {
            res.status(400).json({ error: `Driver doesn't exist. Do SignUp first!!!` });
        }
        else {
            console.log(body.password, driverData.password)
            const isMatch = await matchPassword(body.password, driverData.password);
            console.log('is', isMatch)
            if (isMatch) {
                const token = generateAuthToken({_id: driverData._id});
                res.cookie('token', token);
                res.status(200).json({ token, driverData });
            }
            else {
                res.status(401).json({ error: "Invalid email or password" });
            }
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.driverLogout = async (req, res) => {
    const token = req.cookies?.token || req?.headers?.authorization?.split(' ')[1]
    await blacklistedTokenModel.create({token: token});
    res.clearCookie('token');
    res.status(200).json({message: "Successfully logged out."});
}