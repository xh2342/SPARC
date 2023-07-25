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
// app.get('/instance_info', routes.instance_info);
// get instance status with instance_id
app.get('/instance_status/:instance_id', routes.instance_status);


app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});

module.exports = app;
