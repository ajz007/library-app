import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Home from './features/home/Home';
import Search from './features/search/Search';
import BookDetails from './features/bookDetails/BookDetails';
import ReadBook from './features/readBook/ReadBook';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Library App
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/search">Search</Button>
          </Toolbar>
        </AppBar> */}
         <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/read" element={<ReadBook />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
