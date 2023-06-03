import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import { Typography } from '@mui/material';
import SearchBar from './SearchBar';
import filter from '../utils/filter.png';
import OfferSection from './OfferSection';
import NewArrival from './NewArrival';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Box
        sx={{
          width: 357,

          backgroundColor: 'white',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <Navbar />
        <Box>
          <Typography
            sx={{
              marginTop: '20px',
              font: 'Poppins',
              fontWeight: '700',
              fontFamily: 'Poppins',
            }}
            variant="h5"
          >
            Welcome,
          </Typography>
          <Typography
            sx={{
              font: 'Poppins',
              fontWeight: '700',
              fontFamily: 'Poppins',
              color: 'rgba(102, 102, 102, 1)',
            }}
            variant="h6"
          >
            Our Fashions App
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <SearchBar />
            <Box
              component="img"
              sx={{
                height: '50px',
                width: '50px',
                cursor: 'pointer',
              }}
              alt="Menu"
              src={filter}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: '30px' }}>
          <OfferSection />
        </Box>
        <Box sx={{ marginTop: '30px' }}>
          <NewArrival />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'white',
          position: '-webkit-sticky',
          position: 'sticky',
          bottom: '0px',
        }}
      >
        <Footer />
      </Box>
    </>
  );
}

export default HomePage;
