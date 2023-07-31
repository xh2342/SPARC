import { useEffect, useState } from 'react';
import { Box, Button, Container} from '@mui/material';
import {EC2Card} from '../components/EC2Card';

const config = require('../config.json');

export default function HomePage() {

  const [EC2s, setEC2s] = useState([]);

  // fetch all available EC2 IDs
  const getEC2s = () => {
    fetch(`http://${config.server_host}:${config.server_port}/get_All_EC2s`)
      .then(res => res.json())
      .then(resJson => {
        setEC2s(resJson);
        console.log(EC2s);
      })
  };
  
  return (
    <Container sx={{ paddingTop: 5 }}>
      <div>
        <Box display="flex" gap={2}>
          {EC2s.map((instance, index) => (
            <EC2Card instance={instance} />
          ))}
        </Box>
      </div>
      <Button onClick={() => getEC2s()}>Fetch</Button>
    </Container>
    
  );
};