import * as React from 'react';
import {Box, Card, CardActions, CardContent, Button, Chip, Typography} from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const EC2Card = ({instance}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {instance.PlatformDetails}
        </Typography>
        <Typography variant="h5" component="div">
          {instance.Tags.find(tag => tag.Key ==='Name').Value}
        </Typography>

        <Typography variant="body2">
          EC2 id: {instance.InstanceId}
        </Typography>
        <br />
        <Typography>
            <Box display="flex" gap={1}>
                {instance.Tags.map((tag) => {
                    if (tag.Key !== 'Name') {
                        return <Chip label={tag.Value} variant='outlined'/>;
                    }else{
                        return null;
                    }})
                }
            </Box>
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {instance.State.Name === 'stopped'?(
                <div>
                    <Chip label={instance.State.Name.toUpperCase()}/>
                    <Button>Start</Button>
                </div>
            ):(             
            <div>
                <Chip label={instance.State.Name.toUpperCase()}/>
                <Button>Stop</Button>
            </div>)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
