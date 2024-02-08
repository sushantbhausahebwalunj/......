import React from 'react';
import Header from '../../Global/Header';
import { Container, TextField, Box, InputAdornment, Grid, Card, ListItemText, CardContent, Typography, Drawer, List, ListItem, ListItemIcon, Menu, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

function landingPageCW() {
  const [filterAnchorEl, setFilterAnchorEl] = React.useState(null);
  const [sortAnchorEl, setSortAnchorEl] = React.useState(null);

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
    { title: 'Heading', rating: 5, writer: 'Content Writer'},
    { title: 'Heading', rating: 4, writer: 'Content Writer'},
    { title: 'Heading', rating: 3, writer: 'Content Writer'},
    { title: 'Heading', rating: 1, writer: 'Content Writer'},
    { title: 'Heading', rating: 5, writer: 'Content Writer'},
    { title: 'Heading', rating: 4, writer: 'Content Writer'},
    { title: 'Heading', rating: 5, writer: 'Content Writer'},
    { title: 'Heading', rating: 4, writer: 'Content Writer'},
  ];

  return (
    <div>
      <Header/>
      <Grid container>
        <Grid item xs={1} style={{border:"1px solid black" , backgroundColor:"#3081D0"}}>
          {/* Add your content here */}
        </Grid>
        <Grid item xs={11} style={{border:"1px solid black"}}>
        <Box display="flex" justifyContent="flex-end">
  <Button aria-controls="filter-menu" aria-haspopup="true" onClick={handleFilterClick} style={{border: '1px solid'}}>
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
  <Button aria-controls="sort-menu" aria-haspopup="true" onClick={handleSortClick} style={{border: '1px solid'}}>
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
                style={{ width: '50%', marginTop: '5px'}}
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
              {cards.map((card, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card sx={{ margin: '5%'}}>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <CardContent>
                        <h2>{card.title}</h2>
                        <Box
                          sx={{
                            '& > legend': { mt: 2 },
                          }}
                        >
                          <Typography component="legend">{card.rating} Star</Typography>
                          <Rating name={`read-only${i}`} value={card.rating} readOnly />
                          {/* <p>{card.rating}</p> */}
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

export default landingPageCW