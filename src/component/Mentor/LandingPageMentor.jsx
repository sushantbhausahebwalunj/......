import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

function LandingPageMentor() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={0} style={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h6">Progress</Typography>
            <Typography variant="h6">Badges</Typography>
            <Typography variant="h6">Pathway</Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={0}>
            <Typography variant="h6">Progress Content</Typography>
            {/* Add your Progress content here */}
            <Typography variant="h6" style={{ marginTop: '500px' }}>Badges Content</Typography>
            {/* Add your Badges content here */}
            <Typography variant="h6" style={{ marginTop: '500px' }}>Pathway Content</Typography>
            {/* Add your Pathway content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPageMentor;