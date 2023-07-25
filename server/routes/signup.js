const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const createUser = async (client, username, password, email) => {
    await client.db('users').collection('login-credentials').insertOne({username: username, password: password, email: email});
}

const checkUsernameAvailability = async (client, username) => {
    const result = await client.db('users').collection('login-credentials').findOne({username: username});

    return result !== null;
}

//sign up user unless username already exsists in database
//TODO: probably should make this happen with email too
router.post('/', async (req, res) => {
    try {
        const {username, password, email} = req.body;
        await client.connect()

        const isUsernameTaken = await checkUsernameAvailability(client, username)
        if (isUsernameTaken) {
            return res.status(409).json({ message: 'Username is already taken' });
        }
        else {
            await createUser(client, username, password, email)
            return res.status(200).json({message: 'Sign up successful'})
        }

    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
});

module.exports = router