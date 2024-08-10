import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BookDetails = () => {
  const { selectedBook } = useSelector((state) => state.books);

  return (
    <Box padding={2}>
      {selectedBook ? (
        <>
          <Typography variant="h4">{selectedBook.title}</Typography>
          <Typography variant="body1">Author: {selectedBook.author}</Typography>
          <Typography variant="body2" paragraph>
            {selectedBook.description}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/read">
            Read Now
          </Button>
        </>
      ) : (
        <Typography>No book selected.</Typography>
      )}
    </Box>
  );
};

export default BookDetails;
