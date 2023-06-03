import { Box } from '@mui/material';
import React from 'react';
import ItemDetails from './ItemDetails';
import { useLocation } from 'react-router-dom';

import ItemDetailImage from './ItemDetailImage';

function DetailsPage() {
  const { state } = useLocation();
  const {
    title,
    image,
    subtitle,
    price,
    description,
    rating,
    reviews,
    available,
  } = state;
  return (
    <Box
      sx={{
        width: 357,
        // height: '10',
        height: '100vh',
        backgroundColor: 'white',
      }}
    >
      <ItemDetailImage image={image} />

      <Box
        sx={{
          backgroundColor: 'white',
        }}
      >
        <ItemDetails
          title={title}
          subtitle={subtitle}
          image={image}
          price={price}
          description={description}
          rating={rating}
          reviews={reviews}
          available={available}
          like
        />
      </Box>
    </Box>
  );
}

export default DetailsPage;
