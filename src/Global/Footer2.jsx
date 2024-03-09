import React from "react";
import { Container, Grid, Typography, TextField, Button, Link, Box } from "@mui/material";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { withStyles } from '@mui/styles';

export default function Footer2() {

  const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      '& .MuiInputLabel-outlined': { // Add this rule
        color: 'white',
      },
    },
  })(TextField);

  return (
    <div>
      <Box sx={{ width: '100%'}}>
  <Container maxWidth="xl" style={{ backgroundColor: "#141E46", color: "white", padding: "1rem", paddingLeft: 0 ,paddingRight:0}}>
      <Box sx={{ width: '100%'}}>
        <Container maxWidth="xl" style={{ backgroundColor: "#141E46", color: "white", padding: "1rem" }}>
          <Grid container spacing={3}>
            
            {/* Contact Information */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Contact Information</Typography>
              <Typography>Email: abhyaskar@gmail.com</Typography>
              <Typography>Phone: +1234567890</Typography>
            </Grid>

            {/* Our Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Our Services</Typography>
              <Box sx={{ p: 1 }}>
                <Link href="#" color="inherit">Service 1</Link>
              </Box>
              <Box sx={{ p: 1 }}>
                <Link href="#" color="inherit">Service 2</Link>
              </Box>
              <Box sx={{ p: 1 }}>
                <Link href="#" color="inherit">Service 3</Link>
              </Box>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Social Links</Typography>
              <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
                <Link href="#" color="inherit" target="_blank">
                  Facebook
                </Link>
                <FaFacebook style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Box>
              <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
                <Link href="#" color="inherit" target="_blank">
                  LinkedIn
                </Link>
                <FaLinkedin style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Box>
              <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
                <Link href="#" color="inherit" target="_blank">
                  Twitter
                </Link>
                <FaTwitter style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Box>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Newsletter</Typography>
              <form noValidate autoComplete="off">
              <CustomTextField id="newsletterEmail" label="Enter your email" variant="outlined" size="small" />
                <Box>
                  <Button variant="contained" color="primary" type="submit" style={{ marginTop: "1rem" }}>
                    Subscribe
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </Container>
      </Box>
    </div>
  );
}