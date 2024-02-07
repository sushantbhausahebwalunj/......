import React from 'react'
import Header from '../../Global/Header'
import { Container, TextField, Box ,InputAdornment,Grid, Card, ListItemText,CardContent,Typography,Drawer,List,ListItem,ListItemIcon} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

function landingPageCW() {

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
      {/* <div style={{border:"1px solid black", marginTop:"4.5%"}}>
<h2>Priya</h2>
      </div> */}
      
      <div maxwidth="xl" style={{border:"1px solid black", marginTop:"4.5%"}}>
      
       <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
    <TextField
      label="Search"
      variant="outlined"
      style={{ width: '50%', marginTop: '20px' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  </Box>
  <Grid container spacing={3}>
    {cards.map((card, i) => (
      <Grid item xs={12} sm={6} md={3} key={i}>
        
        <Card>
          <CardContent>
            <h2>{card.title}</h2>
            <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
            <Typography component="legend">Read only</Typography>
          <Rating name={`read-only${i}`} value={card.rating} readOnly />
            {/* <p>{card.rating}</p> */}
            </Box>
            <p>{card.writer}</p>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
      </div>
    </div>
  )
}

export default landingPageCW