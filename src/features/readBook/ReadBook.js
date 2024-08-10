import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ReadBook = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePrevPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);

  return (
    <Box padding={2}>
      <Typography variant="h5">Reading: [Book Title]</Typography>
      <Box marginTop={2} padding={2} border="1px solid #ccc">
        <Typography>
          Content of Page {currentPage}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button variant="contained" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <Button variant="contained" onClick={handleNextPage}>
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default ReadBook;
