import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import IncrementDecrementButton from './IncrementDecrementButton';
import Rating from '@mui/material/Rating';
import Size from './Size';
import Description from './Description';
import ItemDetailsFooter from './ItemDetailsFooter';
function ItemDetails({
  title,

  subtitle,
  price,

  rating,
  reviews,
  available,
}) {
  const [noOfItems, setNoOfItems] = useState(1);

  return (
    <Box
      sx={{
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        paddingTop: '25px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // Added positioning
        zIndex: '15', // Added higher z-index
        top: '-18px',
        backgroundColor: 'white',
      }}
      className="itemDetails-container"
    >
      <Box sx={{ width: 357, display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',

            flex: 1,
            justifyContent: 'space-around',
          }}
        >
          <Box>
            <Typography
              sx={{
                font: 'Poppins',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '600',
                color: 'black',
                fontSize: '18px',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                font: 'Poppins',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '400',

                fontSize: '11px',
                color: '#666666',
              }}
            >
              {subtitle}
            </Typography>
          </Box>
          <IncrementDecrementButton
            noOfItems={noOfItems}
            setNoOfItems={setNoOfItems}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '10px',
          paddingLeft: '13px',
          paddingRight: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            sx={{ fontSize: '20px' }}
            name="read-only"
            value={rating}
            readOnly
          />
          <Typography
            sx={{
              font: 'Poppins',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '400',
              color: 'black',
              fontSize: '11px',
            }}
          >
            ({reviews} reviews)
          </Typography>
        </Box>
        <Typography
          sx={{
            font: 'Poppins',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '600',
            color: available ? 'black' : 'red',
            fontSize: '13px',
          }}
        >
          {available ? '' : 'Not '}Availabe in stock
        </Typography>
      </Box>
      <Size />
      <Description />
      <Box
        sx={{
          backgroundColor: 'white',
          position: '-webkit-sticky',
          position: 'sticky',
          bottom: '0px',
        }}
      >
        <ItemDetailsFooter noOfItems={noOfItems} price={price} />
      </Box>
    </Box>
  );
}

export default ItemDetails;
