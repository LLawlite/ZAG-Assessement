import React from 'react';

import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '../utils/SearchIcon.png';

function SearchBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(243, 244, 245, 1)',
        borderRadius: '30px',
        padding: '10px',
        width: '270px',
      }}
      gap={10}
    >
      <form>
        <IconButton aria-label="search">
          <img src={SearchIcon} alt="Icon"></img>
        </IconButton>
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Search..."
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            marginTop: '2px',
            marginLeft: '2px',
            width: '210px',
          }}
        />
      </form>
    </Box>
  );
}

export default SearchBar;
