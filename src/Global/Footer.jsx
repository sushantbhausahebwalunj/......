import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" sx={{ color: '#FFFFFF' }}>
      {'Copyright © 2023 - '}
      {new Date().getFullYear()}
      {'. '}
      <Link color="inherit" href="https://abhyaskar.com/">
         Abhyaskar. 
      </Link>{' '}
       {' All right reserved, '}
      <Link color="inherit" href="https://abhyaskar.com/">
          Cookie Policy,
      </Link>{' '}
      
      <Link color="inherit" href="https://abhyaskar.com/">
           Privacy and Terms.
      </Link>{' '}
      
    </Typography>
  );
}

export default function StickyFooter() {
  return (

<Box sx={{ mb: '60px' }}>

    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0, 
          width: '100%'
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor: '#141E46'
           }}
        >
          <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center' }}>
           <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    </Box>
  );
}