import { Box } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
function Footer() {
  return (
    <Box
      className="footer-container"
      component="div"
      sx={{
        marginBottom: '100px',
        height: '70px',
        backgroundColor: 'white',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <Box
          sx={{
            backgroundColor: 'black',
            borderRadius: '50% 50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30px',
            width: '30px',
            zIndex: 10,
            cursor: 'pointer',
          }}
        >
          <HomeIcon
            sx={{
              color: 'white',
              fontSize: '23px',
              zIndex: 10,
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: '#EEEEEE',
            position: 'absolute',
            left: '17px',
            width: '80px',
            justifyContent: 'center',

            display: 'flex',
            top: '2px',
            borderRadius: '30px',
            height: '30px',
            fontFamily: "'Poppins', sans-serif",
            font: 'Poppins',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Home
        </Box>
      </Box>
      <ShoppingCartIcon sx={{ marginLeft: '50px', cursor: 'pointer' }} />
      <NotificationsIcon sx={{ cursor: 'pointer' }} />
      <PersonIcon sx={{ cursor: 'pointer' }} />
    </Box>
  );
}

export default Footer;
