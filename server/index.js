const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//Connection to remote-hosted database
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

//Server Ports
const PORT = process.env.PORT || 5000;
app.listen(PORT)
    console.log(`Server is listening on Port ${PORT}`);