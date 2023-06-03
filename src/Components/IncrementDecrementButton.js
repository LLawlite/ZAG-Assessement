import React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
function IncrementDecrementButton({ noOfItems, setNoOfItems }) {
  //Handel Button Click here

  const handleButtonClick = (add) => {
    if (add) {
      let newAddedValue = noOfItems + 1;
      setNoOfItems(newAddedValue);
    } else {
      let newSubtractedValue = noOfItems - 1;
      if (newSubtractedValue < 0) {
        setNoOfItems(0);
      } else {
        setNoOfItems(newSubtractedValue);
      }
    }
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button
        sx={{
          backgroundColor: '#EEEEEE',
          color: 'black',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',

          ':hover': {
            backgroundColor: 'white',
            color: 'black',
          },
          padding: '0px',
        }}
        onClick={() => handleButtonClick(false)}
      >
        -
      </Button>
      <Box
        sx={{
          backgroundColor: '#EEEEEE',

          paddingRight: '2px',
        }}
      >
        <Typography>{noOfItems}</Typography>
      </Box>

      <Button
        sx={{
          backgroundColor: '#EEEEEE',
          color: 'black',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',

          ':hover': {
            backgroundColor: 'white',
            color: 'black',
          },
          padding: '0px',
        }}
        onClick={() => handleButtonClick(true)}
      >
        +
      </Button>
    </Box>
  );
}

export default IncrementDecrementButton;
