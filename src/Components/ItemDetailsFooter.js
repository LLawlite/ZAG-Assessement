import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import buybag from '../utils/buybag.png';
import { useNavigate } from 'react-router-dom';
function ItemDetailsFooter({ noOfItems, price }) {
  const navigate = useNavigate();
  const totalPrice = (noOfItems * price).toFixed(2);

  // To display the price till 2 decimal places
  const formattedPrice = totalPrice.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const handleButtonClick = () => {
    navigate('/payment');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        paddingRight: '20px',
      }}
    >
      <Box>
        <Typography
          sx={{
            font: 'Poppins',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: '11px',
            paddingLeft: '16px',
            paddingRight: '8px',
            color: '#888888',
          }}
        >
          Total Price
        </Typography>
        <Typography
          sx={{
            font: 'Poppins',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '700',
            fontSize: '20px',
            paddingLeft: '16px',
            paddingRight: '8px',
          }}
        >
          ${formattedPrice}
        </Typography>
      </Box>
      <Button
        sx={{
          backgroundColor: 'black',
          padding: '10px',
          width: '200px',
          borderRadius: '30px',

          ':hover': {
            backgroundColor: '#888888',
          },
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'center',
        }}
        onClick={() => handleButtonClick()}
      >
        <Box component="img" src={buybag} />
        <Typography
          sx={{
            font: 'Poppins',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '600',
            fontSize: '16px',
            color: 'white',
          }}
        >
          Buy Now
        </Typography>
      </Button>
    </Box>
  );
}

export default ItemDetailsFooter;
