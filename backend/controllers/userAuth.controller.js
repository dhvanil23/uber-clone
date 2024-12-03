const { matchPassword, generateAuthToken } = require('../middlewares/auth.middleware');
const userModel = require('../models/users.model');
const {userCreate} = require('../services/userModel.service');

module.exports.userSignUp = async (req, res) => {
    const body = req.body;
    const userData = await userModel.find({
        email: body.email
    })
    console.log('userdata',userData)
    if(userData.length > 0){
        res.status(409).json({error:`User already exists with ${body.email}`});
    }
    else{
        const newUser = await userCreate(body); 
        const token = generateAuthToken(body);
        res.cookie('token',token);
        res.status(201).json({token, newUser});
    }
}

module.exports.userLogin = async (req, res) => {
    const body = req.body;
    const userData = await userModel.findOne({
        email: body.email
    })
    if(!userData){
        res.status(400).json({error:`User doesn't exist. Do SignUp first!!!`});
    }
    else{
        console.log(body.password, userData.password)
        const isMatch = await matchPassword(body.password, userData.password);
        console.log(isMatch)
        if(isMatch){
            const token = generateAuthToken(body);
            res.cookie('token',token);
            res.status(200).json({token, userData});
        }
        else{
            res.status(401).json({error: "Invalid email or password"});
        }
    }
}