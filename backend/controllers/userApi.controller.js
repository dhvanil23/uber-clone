const userModel = require('../models/users.model');
const {userFind} = require('../services/userModel.service');

module.exports.getUserProfile = function (req,res){
    res.json(req.user);
}