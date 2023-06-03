import React, { useState } from 'react';
import { Box } from '@mui/material';

import buybag from '../utils/buybag.png';
import volume from '../utils/volume.png';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorderOutlined } from '@mui/icons-material';
function ItemDetailImage({ image }) {
  const [like, setLike] = useState(false);
  return (
    <Box sx={{ position: 'relative', height: '50%' }}>
      <img
        src={image}
        alt="Item Image"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          zIndex: '-1',
        }}
      />
      <Box
        sx={{
          height: '35px',
          width: '35px',
          backgroundColor: 'black',
          position: 'absolute',
          top: '50px',
          left: '16px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Box component="img" src={volume} />
      </Box>
      <Box
        sx={{
          height: '35px',
          width: '35px',
          backgroundColor: 'white',
          position: 'absolute',
          top: '50px',
          right: '16px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {
          // setting the brightness to 0 to make image black and saturation to 0 which determines the intensity and vivdness of colors
        }
        <Box
          component="img"
          src={buybag}
          sx={{
            filter: 'brightness(0) saturate(0%)',
          }}
        />
      </Box>
      <Box
        sx={{
          height: '35px',
          width: '35px',
          backgroundColor: 'white',
          position: 'absolute',
          bottom: '50px',
          right: '16px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setLike(!like)}
      >
        {like ? (
          <FavoriteIcon sx={{ color: 'red' }} />
        ) : (
          <FavoriteBorderOutlined />
        )}
      </Box>
    </Box>
  );
}

export default ItemDetailImage;
