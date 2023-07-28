const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/users?retryWrites=true&w=majority')

const createUser = async (username, password, email) => {
    try {
      const newUser = new User({ username, password, email });
      const savedUser = await newUser.save();
      return savedUser;
    } catch (error) {
      // Handle error if needed
      console.error('Error creating user:', error);
      throw error;
    }
  };

const checkUsernameAvailability = async (username) => {
    const result = await User.findOne({ username });

    return result !== null;
}

//sign up user unless username already exsists in database
//TODO: probably should make this happen with email too
router.post('/', async (req, res) => {
    try {
        const {username, password, email} = req.body;

        const isUsernameTaken = await checkUsernameAvailability(username)
        if (isUsernameTaken) {
            return res.status(409).json({ message: 'Username is already taken' });
        }
        else {
            await createUser(username, password, email)
            return res.status(200).json({message: 'Sign up successful'})
        }

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router