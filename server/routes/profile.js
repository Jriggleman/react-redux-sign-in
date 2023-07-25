const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://jriggleman16:c6m8rehj@cluster0.cfxwc0c.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri);