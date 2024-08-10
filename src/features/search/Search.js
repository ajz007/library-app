import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStart, searchSuccess, searchFailure } from './searchSlice';
import { searchBooks } from './bookApi';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    dispatch(searchStart());
    try {
      const results = await searchBooks(query);
      dispatch(searchSuccess(results));
      navigate('/search/results');
    } catch (error) {
      dispatch(searchFailure('Failed to fetch search results.'));
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2} paddingTop={10}>  {/* Add paddingTop to position content below NavBar */}
      <TextField 
        label="Search Books" 
        variant="outlined" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        fullWidth 
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
