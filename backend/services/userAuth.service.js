const userModel = require('../models/users.model');

module.exports.userCreate = async (req) => {
    if (!req.firstName || !req.email || !req.password){
        throw new Error("Required fields are missing.")
    }
    const user = await userModel.create({
        firstName: req.firstName,
        lastName: req?.lastName,
        socketId: req?.socketId,
        email: req.email,
        password: req.password,
    })
    return user
}