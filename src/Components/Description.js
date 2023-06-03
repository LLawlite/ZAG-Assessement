import { Box, Typography } from '@mui/material';
import React from 'react';

function Description() {
  return (
    <Box>
      <Typography
        sx={{
          marginTop: '15px',
          font: 'Poppins',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '20px',
          paddingLeft: '16px',
          paddingRight: '8px',
        }}
      >
        Description
      </Typography>
      <Typography
        sx={{
          font: 'Poppins',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '400',
          fontSize: '11px',
          paddingLeft: '16px',
          paddingRight: '16px',
          color: '#888888',
        }}
      >
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lsktop publishing software like Aldus PageMaker including
        versions of Lor.
      </Typography>
    </Box>
  );
}

export default Description;
