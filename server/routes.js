const AWS = require('aws-sdk');
const fs = require('fs');

// Load the credentials from the config file
const config = JSON.parse(fs.readFileSync('config.json'));

// Set up AWS credentials
AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: config.region
  });

const ec2 = new AWS.EC2();

// const instance_info = async function(req, res){

// }


const instance_status = async function (req, res) {
    const instanceId = req.params.instance_id; // Get the instance ID from the request
    const params = {
      InstanceIds: [instanceId] // Specify the instance IDs for the describeInstances call
    };
  
    ec2.describeInstances(params, (err, data) => {
      if (err) {
        console.log('Error:', err); // Log any error that occurred during the AWS request
        res.status(500).json({ error: 'Error getting instance status' }); // Send an error response to the client
      } else {
        if (data.Reservations.length === 0 || data.Reservations[0].Instances.length === 0) {
          console.log('EC2 instance not found.'); // Log a message if the EC2 instance was not found
          res.status(404).json({ error: 'EC2 instance not found' }); // Send a 404 response if the EC2 instance was not found
        } else {
          const instance = data.Reservations[0].Instances[0]; // Get the first instance from the response data
          console.log(`Instance ID: ${instance.InstanceId}`); // Log the instance ID
          console.log(`State: ${instance.State.Name}`); // Log the instance state name (e.g., "running", "stopped")
          res.json(instance.State.Name); // Send the instance state as JSON in the response
        }
      }
    });
  };

  module.exports = {
    instance_status,
  };