const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);

//sign in user
router.post('/', async (req, res) => {
    try {
        const {username, password} = req.body;
        await client.connect();

        const user = await signInUser(client, username, password);

        if (user) {
            return res.status(200).json({message: 'Sign in successful'})
        }
        else {
            return res.status(401).json({message: 'Invalid username or password'})
        }
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
});

const signInUser = async (client, username, password) => {
    const result = await client.db('users').collection('login-credentials').findOne({ username, password });
    return result;
}

module.exports = router