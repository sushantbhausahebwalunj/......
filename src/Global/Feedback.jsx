import React from 'react'
import Header2 from './Header2'
import Footer from "./Footer";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Typography, Box, TextField, Button, Grid } from '@mui/material'

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function Feedback() {


  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);

  return (
    <div>
      <Header2 />
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "12vh" }}>
        <Typography variant="h5">
          Enjoying our app? Please leave a review!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '7vh',
          fontSize: "1.5rem"
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ mt: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      <Box xs={12} sm={10} md={8} lg={6} sx={{ mt: 4 }} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "10%", marginRight: "10%" }}>
          <TextField
          multiline
          rows={12}
          variant="outlined"
          placeholder="Enter your feedback here..."
          style={{ width: '100%', maxWidth: '100%' }}
        />
      </Box>
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        sx={{ mt: 2, mb: 5 }}>
        <Button variant="contained">Submit</Button>
      </Box>
      <Footer />
    </div>
  )
}

export default Feedback