import React from 'react';
import { Container, Grid, Typography, Paper, Button, Card, CardContent } from '@mui/material';
import Advertisement from '../../Global/Advertisement';

function ContentPageLearner() {
  return (
    <div style={{backgroundColor:"white" ,display:"flex",direction:"row"}}>
      <Grid container >
        <Grid item xs={12} sm={10}>
          <Container>
            <Typography variant="h4" align="center" style={{display:"flex",padding:"2%"}}>Sub-Topic</Typography>
            <Typography variant="body2" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, mauris nec. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Paper style={{ marginTop: '1em', padding: '1em' }}>
              <Button variant="contained" color="primary">
                Try it
              </Button>
            </Paper>
            <Paper style={{ marginTop: '1em', padding: '1em' }}>
              <Typography variant="h5" align="center">Animated Videos</Typography>
            </Paper>
            <Container style={{ marginTop: '1em', backgroundColor:"#D2E0FB" ,padding:"1em"}}>
              <Typography variant="h5" align="center">Sub-Topics Quiz</Typography>
              {[1, 2, 3, 4].map((item) => (
                <Card style={{ marginTop: '1em' }} key={item}>
                  <CardContent>
                    <Typography variant="h5" align="center">Card {item}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Container>
          </Container>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Advertisement />
        </Grid>
      </Grid>
     
    </div>
  )
}

export default ContentPageLearner;