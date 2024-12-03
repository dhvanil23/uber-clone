const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.maskPassword = function (next) {
    if (this.isModified('password')) {
        bcrypt
            .hash(this.password, 10)
            .then((hashedPassword) => {
                console.log(this.password, hashedPassword);
                this.password = hashedPassword;
                next();
            })
            .catch((err) => {
                console.log("Error in hashing password", err);
                return;
            });
    }
    else {
        return;
    }
}

module.exports.generateAuthToken = function (body) {
    const token = jwt.sign(body, process.env.SECRET_KEY);
    return token;
};

module.exports.matchPassword = async function (password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}