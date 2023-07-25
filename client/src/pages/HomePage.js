import { useEffect, useState } from 'react';
import { Container, Divider, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const config = require('../config.json');

export default function HomePage() {

  const [EC2Status, setEC2Status] = useState(null);
  const instance_id = "i-01041635597050d92";
  useEffect(() => {
    fetch(`http://${config.server_host}:${config.server_port}/instance_status/${instance_id}`)
      .then(res => res.json())
      .then(resJson => {
        setEC2Status(resJson);
      });
    }, []);

  return (
    <Container>
      <h2>EC2 ID: {instance_id}</h2>
      <h2>Status: {EC2Status}</h2>
    </Container>
  );
};