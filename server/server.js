const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(cors({
  origin: '*',
}));

// routes
// get information for all available instances: instance_id
app.get('/get_All_EC2s', routes.get_All_EC2s);
// get instance status with instance_id
// app.get('/instance_status/:EC2_IDs', routes.EC2_status);


app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});

module.exports = app;
