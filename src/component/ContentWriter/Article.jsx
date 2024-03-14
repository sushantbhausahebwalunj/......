import React, { useState , useContext } from 'react';
import Header from '../../Global/Header';
import { TextField, Box, InputAdornment, Grid, Card, CardContent, Typography, Menu, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Footer2 from '../../Global/Footer2';
import MyContext from '../context/ContextData';

function Article() {
  const navigate = useNavigate();
  const { contentData } = useContext(MyContext); // Get contentData from context

  // const navigate = useNavigate();

  const [filterAnchorEl, setFilterAnchorEl] = React.useState(null);
  const [sortAnchorEl, setSortAnchorEl] = React.useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (card) => {
    navigate(`/articles/${card.title}`);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const cards = [
    { title: 'Artifical Intelligence', rating: 5, writer: 'Vaishnavi' },
    { title: 'Big Data', rating: 5, writer: 'Aniket' },
    { title: 'IOT', rating: 5, writer: 'Priya' },
    { title: 'Machine Learning', rating: 5, writer: 'Atul' },
    { title: 'Computer Graphics', rating: 5, writer: 'Adi' },
    { title: 'Data Structures', rating: 2, writer: 'Content Writer' },
    { title: 'Cryptography', rating: 5, writer: 'Content Writer' },
    { title: 'Robotics', rating: 1, writer: 'Content Writer' },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.writer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      {location.pathname.startsWith('/learner/profile') ? null : <Header />}

      <Grid container>

        <Grid item xs={12} >
          <Box display="flex" justifyContent="flex-end">
            <Button aria-controls="filter-menu" aria-haspopup="true" onClick={handleFilterClick} style={{ border: '1px solid', backgroundColor: "#5F0F40", color: "#ffffff" }}>
              Filter
            </Button>
            <Menu
              id="filter-menu"
              anchorEl={filterAnchorEl}
              keepMounted
              open={Boolean(filterAnchorEl)}
              onClose={handleFilterClose}
            >
              <MenuItem onClick={handleFilterClose}>Latest</MenuItem>
              <MenuItem onClick={handleFilterClose}>Language settings</MenuItem>
              <MenuItem onClick={handleFilterClose}>Log out</MenuItem>
            </Menu>
            <Button aria-controls="sort-menu" aria-haspopup="true" onClick={handleSortClick} style={{ border: '1px solid', backgroundColor: "#5F0F40", color: "#ffffff" }}>
              Sort
            </Button>
            <Menu
              id="sort-menu"
              anchorEl={sortAnchorEl}
              keepMounted
              open={Boolean(sortAnchorEl)}
              onClose={handleSortClose}
            >
              <MenuItem onClick={handleSortClose}>Ascending</MenuItem>
              <MenuItem onClick={handleSortClose}>Descending</MenuItem>
            </Menu>
          </Box>

          <Box>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ width: '50%', marginTop: '5px', backgroundColor: "white" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
                  
            <Grid container spacing={5}>
              {filteredCards.map((card, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>

                  <Card sx={{ margin: '5%' }} onClick={() => handleCardClick(card)} >
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <CardContent>
                        <Typography variant="h5" component="div">{card.title}</Typography>
                        <Box
                          sx={{
                            '& > legend': { mt: 2 },
                          }}
                        >
                          <Typography component="legend">{card.rating} Star</Typography>
                          <Rating name={`read-only${i}`} value={card.rating} readOnly />
                        </Box>
                        <p>{card.writer}</p>
                      </CardContent>
                    </Box>
                  </Card>

                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {location.pathname.startsWith('/learner/profile') ? null : <Footer2 />}

    </div>
  )
}


export default Article;

