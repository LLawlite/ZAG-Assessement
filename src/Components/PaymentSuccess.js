import { Box, Typography } from '@mui/material';
import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function PaymentSuccess() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: 357,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fbf3f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '90%',
          height: '50vh',
        }}
      >
        <CheckCircleOutlineIcon
          sx={{
            fontSize: '50px',
            color: 'green',
          }}
        />
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
          }}
        >
          Payment received
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '11px',
            color: '#888888',
            width: '90%',
            display: 'flex',

            textAlign: 'center',
          }}
        >
          Payment received Payment received Payment received Payment received
        </Typography>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
