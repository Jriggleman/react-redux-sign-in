const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const signUpRoute = require('./routes/signup');
const signInRoute = require('./routes/signin');
const profileRoute = require('./routes/profile');

app.use('/users/signup', signUpRoute);
app.use('/users/signin', signInRoute);
app.use('/users/profile', profileRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
