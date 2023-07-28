const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/users?retryWrites=true&w=majority')

//display user data
router.post('/', (req, res) => {
    
})