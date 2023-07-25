const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

//sign up user unless username already exsists in database
//TODO: probably should make this happen with email too
app.post('/users/signup', async (req, res) => {
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

//sign in user
app.post('/users/signin', async (req, res) => {
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

const createUser = async (client, username, password, email) => {
    await client.db('users').collection('login-credentials').insertOne({username: username, password: password, email: email});
}

const checkUsernameAvailability = async (client, username) => {
    const result = await client.db('users').collection('login-credentials').findOne({username: username});

    return result !== null;
}

PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
