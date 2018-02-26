const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//Server Ports
const PORT = process.env.PORT || 5000;
app.listen(PORT)
    console.log('Server has started');