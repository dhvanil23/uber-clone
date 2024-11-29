const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

userSchema.methods.generateAuthToken = function (body) {
  const token = jwt.sign(body, process.env.SECRET_KEY);
  this.authToken = token;
  return token;
};

userSchema.pre("save", function (next) {
  if(this.isModified('password')){
    bcrypt
      .hash(this.password, 10)
      .then((hashedPassword) => {
        console.log(this.password,hashedPassword);
        this.password = hashedPassword;
        next();
      })
      .catch((err) => {
        console.log("Error in hashing password", err);
        return;
      });
  }
  return;
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
