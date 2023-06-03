import React from 'react';
import Box from '@mui/material/Box';
import Offerdata from '../storage/Offerdata';

import './OfferCard.css';

import OfferCard from './OfferCard';

function OfferSection() {
  return (
    <Box sx={{ display: 'flex' }} className="parentDiv">
      {Offerdata.map((item, idx) => (
        <Box key={idx} sx={{ position: 'relative' }}>
          <OfferCard
            discount={item.discount}
            onwhat={item.onwhat}
            code={item.code}
          />
        </Box>
      ))}
    </Box>
  );
}

export default OfferSection;
