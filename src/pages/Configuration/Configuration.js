import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Configuration = () => {
  return (
    <div style={{display:'grid',gap:'10px', gridTemplateColumns:'repeat(auto-fit, minmax(400px, 1fr)'}}>
    <Card sx={{ minWidth: 400 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Subjects
        </Typography>    
        </CardContent>
    </Card>
    <Card sx={{ minWidth: 400 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Classes
        </Typography>    
        </CardContent>
    </Card>
    <Card sx={{ minWidth: 400 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Academic Year Configuration
        </Typography>    
        </CardContent>
    </Card>
    </div>
  )
}

export default Configuration