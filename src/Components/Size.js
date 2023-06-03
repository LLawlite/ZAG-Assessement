import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

function Size() {
  const [size, setSize] = useState(2);
  const handleButtonClick = (value) => {
    setSize(value);
  };
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: '40px',
          font: 'Poppins',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '20px',
          paddingLeft: '16px',
          paddingRight: '8px',
        }}
      >
        Size
      </Typography>
      <Box
        sx={{
          color: '#888888',
          font: 'Poppins',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '16px',
          display: 'flex',
          justifyContent: 'space-around',
          paddingLeft: '8px',
          paddingRight: '8px',
          marginTop: '15px',
        }}
      >
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 1 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 1 ? '2px solid #888888' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 1 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(1)}
        >
          S
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 2 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 2 ? '2px solid #888888' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 2 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(2)}
        >
          M
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 3 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 3 ? '2px solid #888888' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 3 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(3)}
        >
          L
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 4 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 4 ? '2px solid #888888' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 4 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(4)}
        >
          X
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 5 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 5 ? '2px solid #888888' : '',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 5 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(5)}
        >
          XL
        </Box>
        <Box
          sx={{
            height: '40px',
            width: '40px',
            backgroundColor: size === 6 ? 'black' : 'white',
            borderRadius: '50%',
            border: size !== 6 ? '2px solid #888888' : '2px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: size === 6 ? 'white' : '#888888',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(6)}
        >
          XXL
        </Box>
      </Box>
    </Box>
  );
}

export default Size;
