import { Box } from '@mui/material';
import React from 'react';
import menu from '../utils/menu.png';
import profile from '../utils/profile.png';
function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '25px',
      }}
    >
      <Box
        component="img"
        sx={{
          height: '35px',
          width: '35px',
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          cursor: 'pointer',
        }}
        alt="Menu"
        src={menu}
      />
      <Box
        component="img"
        sx={{
          height: '40px',
          width: '40px',
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          backgroundColor: '#d2d2d2',
          borderRadius: '50% 50%',
          cursor: 'pointer',
        }}
        alt="The house from the offer."
        src={profile}
      />
    </Box>
  );
}

export default Navbar;
