import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Select, MenuItem, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';


function LandingPageMentor() {
  const [child, setChild] = React.useState(1);

  const handleChange = (event) => {
    setChild(event.target.value);
  };
  const handleAdd = () => {
    console.log('Add');
    // Perform add action
  };

  return (

    <Container maxWidth="xl" style={{ backgroundColor: "white", padding: "1rem" }}>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1%' }}>
        <Grid item xs={12}>
          <Select
            value={child}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>Child 1</MenuItem>
            <MenuItem value={2}>Child 2</MenuItem>
            <MenuItem value={3}>Child 3</MenuItem>
          </Select>
          <Box mt={2}>
            <Button variant="contained">Add Child</Button>
          </Box>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Total Problems
              </Typography>
              <Typography variant="subtitle1">
                Solved
              </Typography>
              <Typography variant="h4">
                20
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Monthly Problems
              </Typography>
              <Typography variant="subtitle1">
                Solved
              </Typography>
              <Typography variant="h4">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Total Projects
              </Typography>
              <Typography variant="subtitle1">
                Done
              </Typography>
              <Typography variant="h4">
                2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Streak 4 Days
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Easy Problems
              </Typography>
              <Typography variant="subtitle1">
                Solved
              </Typography>
              <Typography variant="h4">
                10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Medium Problems
              </Typography>
              <Typography variant="subtitle1">
                Solved
              </Typography>
              <Typography variant="h4">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">
                Hard Problems
              </Typography>
              <Typography variant="subtitle1">
                Solved
              </Typography>
              <Typography variant="h4">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>

        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6} md={2}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Bronze
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Silver
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Gold
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Platinum
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Card style={{ borderRadius: '50%', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Diamond
              </Typography>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center">
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LandingPageMentor;
