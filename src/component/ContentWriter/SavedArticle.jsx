
import React, { useState } from 'react';
import Header from '../../Global/Header';
import {TextField, Box, InputAdornment, Grid, Card,CardContent, Typography,Menu, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';

function SavedArticle() {
    const [filterAnchorEl, setFilterAnchorEl] = React.useState(null);
    const [sortAnchorEl, setSortAnchorEl] = React.useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
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
      { title: 'Artifical intelligence', rating: 5, writer: 'Vaishnavi'},
      { title: 'Big data', rating: 4, writer: 'Aniket'},
      { title: 'IOT', rating: 5, writer: 'Priya'},
      { title: 'Data structures', rating: 2, writer: 'Content Writer'},
      { title: 'Cryptography', rating: 5, writer: 'Content Writer'},
      { title: 'Robotics', rating: 1, writer: 'Content Writer'},
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
        <Header/>
        <Grid container>
          <Grid item xs={1} style={{border:"1px solid black" , backgroundColor:"#141E46"}}>
            {/* Add your content here */}
          </Grid>
          <Grid item xs={11} style={{border:"1px solid black"}}>
        
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                <TextField
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{ width: '50%', marginTop: '5px', backgroundColor:"white"}}
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
                    <Card sx={{ margin: '5%'}}>
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
      </div>
    )
  }
  


  export default SavedArticle