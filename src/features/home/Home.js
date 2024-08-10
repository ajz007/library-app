import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchStart, searchSuccess, searchFailure } from '../search/searchSlice';
import { searchBooks } from '../search/bookApi';

const Home = () => {
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

  const carouselItems = [
    {
      title: 'Discover New Worlds',
      image: 'https://source.unsplash.com/random/800x400?books',
      link: '/search',
    },
    {
      title: 'Read Anywhere, Anytime',
      image: 'https://source.unsplash.com/random/800x400?reading',
      link: '/read',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box paddingTop={8} position="relative">  {/* Add paddingTop to ensure content is below NavBar */}
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box key={index} position="relative">
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bgcolor="rgba(0, 0, 0, 0.5)"
              color="white"
              padding={2}
              borderRadius={1}
              textAlign="center"
            >
              <Typography variant="h4" gutterBottom>{item.title}</Typography>
              <Button variant="contained" color="primary" component={Link} to={item.link}>
                Explore
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
      
      {/* Search Section */}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={4} marginTop={4}>
        <Typography variant="h5" gutterBottom>Search for Books</Typography>
        <TextField 
          label="Search Books" 
          variant="outlined" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          fullWidth 
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
