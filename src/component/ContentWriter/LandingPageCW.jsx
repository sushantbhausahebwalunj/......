import React from 'react'
import { Container, Grid, Card, CardContent, Typography,Box } from '@mui/material';
import { useState, useEffect } from 'react';

function LandingPageCW() {

  const [posted, setPosted] = useState(0);
const [draft, setDraft] = useState(0);
const [processing, setProcessing] = useState(0);
const [totalViews, setTotalViews] = useState(0);

// Update these states dynamically based on your application logic
// For example, you might fetch these values from an API in a useEffect hook

useEffect(() => {
  // Fetch data and update states here
}, []);


  return (
    <Container maxWidth="xl" style={{backgroundColor:"white"}}>
      <Grid container spacing={3} style={{marginTop: '1%'}}>
    <Grid item xs={3}>
    <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Posted</Typography>
                <Typography variant="h6">{posted}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Draft</Typography>
                <Typography variant="h6">{draft}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Processing</Typography>
                <Typography variant="h6">{processing}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={3}>
      <Card>
        <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h5">Average Rating</Typography>
                <Typography variant="h6">{totalViews}</Typography>
              </Box>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  
    </Container>
  )
}

export default LandingPageCW