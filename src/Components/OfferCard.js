import React from 'react';
import { Box, Typography } from '@mui/material';
import image from '../utils/image.png';

import Button from '@mui/material/Button';
function OfferCard({ discount, onwhat, code }) {
  return (
    <Box className="child" component="div">
      <Box component="img" src={image}></Box>
      <Box
        sx={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            font: 'Poppins',
            fontWeight: '700',
            fontSize: '25px',
          }}
        >
          {discount}% Off
        </Typography>
        <Typography
          variant="h7"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            font: 'Poppins',
            color: '',
          }}
        >
          {onwhat}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            font: 'Poppins',
            color: '#666666;',
            fontSize: '11px',
            fontWeight: '600',
            marginTop: '15px',
          }}
        >
          With code: {code}
        </Typography>
        <Button
          sx={{
            fontFamily: "'Poppins', sans-serif",
            font: 'Poppins',
            color: 'white',
            fontSize: '10px',
            fontWeight: '700',
            marginTop: '15px',
            width: '50%',
            borderRadius: '50px',
            backgroundColor: 'black',
          }}
        >
          Get Now
        </Button>
      </Box>
    </Box>
  );
}

export default OfferCard;
