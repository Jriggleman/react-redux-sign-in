const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/users?retryWrites=true&w=majority')

//sign in user
router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await signInUser(username, password);

        if (user) {
            return res.status(200).json({message: 'Sign in successful'})
        }
        else {
            return res.status(401).json({message: 'Invalid username or password'})
        }
    } catch (error) {
        console.log(error);
    }
});

const signInUser = async (username, password) => {
    const result = await User.findOne({ username, password });
    return result;
}

module.exports = router