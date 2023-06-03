import React from 'react';
import { Box, Typography } from '@mui/material';
import ClipLoader from 'react-spinners/ClipLoader';
function PaymentLoading({ loading }) {
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
        <ClipLoader
          color="#888888"
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
          }}
        >
          Payment is processing...
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: '11px',
            color: '#888888',
            marginTop: '10px',
          }}
        >
          {' '}
          Please wait, do not close the window
        </Typography>
      </Box>
    </Box>
  );
}

export default PaymentLoading;
