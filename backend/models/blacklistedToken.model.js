const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 3600,
        default: Date.now
    }
}, { timestamps: true });

const blacklistedTokenModel = mongoose.model("BlacklistedToken", blacklistedTokenSchema);

module.exports = blacklistedTokenModel