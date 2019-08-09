require('newrelic');
require('dotenv').config();
const app = require('./index.js');

const port = process.env.SERVER_PORT;

app.listen(port, () => `listening to port ${port}`);
