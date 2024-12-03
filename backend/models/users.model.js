const mongoose = require("mongoose");
const {maskPassword} = require("../middlewares/auth.middleware")


require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    socketId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", maskPassword);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
