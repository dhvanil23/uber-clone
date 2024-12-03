const driverModel = require('../models/drivers.model');

module.exports.driverCreate = async (req) => {
    if (!req.firstName || !req.email || !req.password || !req.vehicle){
        throw new Error("Required fields are missing.")
    }
    const driver = await driverModel.create({
        firstName: req.firstName,
        lastName: req?.lastName,
        socketId: req?.socketId,
        email: req.email,
        password: req.password,
        status: req?.status,
        vehicle: req.vehicle,
        location: req?.location
    })
    return driver
}

module.exports.driverFind = async (filter) => {
    const drivers = await driverModel.find(filter)
    return drivers;
}