const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/users?retryWrites=true&w=majority')

//display user data
router.get('/', async (req, res) => {
    const { username } = req.query;

    try {
        const email = await getEmail(username)
        res.json({ email: email });
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }

})

const getEmail = async (username) => {
    const user = await User.findOne({ username });
    const email = user.email
    return email;
}

module.exports = router;