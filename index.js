const express = require('express');
const app = express();

require('./startup/db')()
require('./startup/router')(app)


const port = process.env.boxy_port || 5000;

app.listen( port, () => {
    console.log(`App run in port ${port}`);
})
