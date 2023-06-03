import { Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/material';
import NewArrivalCard from './NewArrivalCard';
import NewArrivalData from '../storage/NewArrivalData';

function NewArrival() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          font: 'Poppins',
          fontWeight: '700',
          fontSize: '20px',
        }}
      >
        New Arrival
      </Typography>
      <Box sx={{ display: 'flex' }} className="parentDiv">
        {NewArrivalData.map((item, idx) => (
          <Box key={idx} sx={{ position: 'relative', display: 'flex' }}>
            <NewArrivalCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
              description={item.description}
              available={item.available}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NewArrival;
