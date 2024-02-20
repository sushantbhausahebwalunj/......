import React from "react";
import { Container, Grid, Typography, TextField, Button, Link, Box } from "@mui/material";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer2() {
  return (
    <div>
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <Container maxWidth="xl" style={{ backgroundColor: "#808080", color: "white", padding: "1rem" }}>
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
              <Link href="#" color="inherit" target="_blank">
                Facebook
                <FaFacebook style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Link>
              <Link href="#" color="inherit" target="_blank">
                LinkedIn
                <FaLinkedin style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Link>
              <Link href="#" color="inherit" target="_blank">
                Twitter
                <FaTwitter style={{ marginLeft: "0.5rem", fontSize: "1.25rem" }} />
              </Link>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Newsletter</Typography>
              <form noValidate autoComplete="off">
                <TextField id="newsletterEmail" label="Enter your email" variant="outlined" fullWidth />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: "1rem" }}>
                  Subscribe
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}