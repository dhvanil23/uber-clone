const mongoose = require("mongoose");
const {maskPassword} = require("../middlewares/auth.middleware")

const driverSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        numPlate: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            min: 1,
            required: true
        },
        vehicleType: {
            type: String,
            enum: ["Car", "AutoRicksaw", "Motorcycle"],
            required: true
        },
    },
    location: {
        latitue: {
            type: Number,
            
        },
        longitude: {
            type: Number
        }
    }
}, {timestamps: true});

driverSchema.pre("save", maskPassword);

const driverModel = mongoose.model("Drivers", driverSchema);

module.exports = driverModel