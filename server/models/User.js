const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    username: String,
    password: String,
    email: String,
});

const User = model('User', userSchema, 'login-credentials');
module.exports = User;