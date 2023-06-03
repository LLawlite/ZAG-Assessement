import React, { useState } from 'react';
import { Box } from '@mui/material';

import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

import { useNavigate } from 'react-router-dom';
function NewArrivalCard({
  title,
  image,
  subtitle,
  price,
  description,
  rating,
  reviews,
  available,
}) {
  const [like, setLike] = useState(false);
  const data = {
    title,
    image,
    subtitle,
    price,
    description,
    rating,
    reviews,
    available,
  };

  const navigate = useNavigate();
  const formattedPrice = price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleClick = () => {
    navigate('/details', { state: data });
  };

  return (
    <Box className="child" sx={{ postion: 'realtive' }}>
      <Box>
        <Box component="img" src={image} sx={{ borderRadius: '10px' }} />
        <Box
          onClick={() => setLike(!like)}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '25px',
            backgroundColor: 'black',
            borderRadius: '50% 50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <FavoriteIcon
            sx={{ color: like ? 'red' : 'white', fontSize: '15px' }}
          />
        </Box>
        <Box
          onClick={() => handleClick()}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              font: 'Poppins',
              fontWeight: '600',
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              font: 'Poppins',
              fontWeight: '400',
              fontSize: '11px',
              display: 'block',
              justifyItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              color: '#666666',
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              font: 'Poppins',
              fontWeight: '700',
              fontSize: '19px',
              display: 'block',
              justifyItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            $ {formattedPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default NewArrivalCard;
