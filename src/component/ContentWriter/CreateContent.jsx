import React from 'react'
import Header from '../../Global/Header'
import { Paper, Typography, Grid, Select, Box, InputLabel, MenuItem, FormControl, Button, TextField } from '@mui/material'

function CreateContent() {

  const [domain, setDomain] = React.useState('');
  const [subDomain, setsubDomain] = React.useState('');

  const handleChangeDomain = (event) => {
    setDomain(event.target.value);
  };
  const handleChangeSubDomain = (event) => {
    setsubDomain(event.target.value);
  };

  return (
    <div>
      <Header />
      <div>
        <Paper elevation={5} style={{ maxWidth: '50%', margin: 'auto', marginTop: '5%', padding: '2%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h4' align='center'>
                Create Content/Blog
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={domain}
                    label="Domain"
                    onChange={handleChangeDomain}
                    size='small'
                  >
                    <MenuItem value={10}>Technical</MenuItem>
                    <MenuItem value={20}>Academics</MenuItem>
                    <MenuItem value={30}>Finance</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sub-Domain</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subDomain}
                    label="Sub-Domain"
                    onChange={handleChangeSubDomain}
                    size='small'
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Button variant="contained" color="primary">
                Select Template
              </Button>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <TextField label="Enter text" variant="outlined" size='small' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Button variant="contained" color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Button variant="contained" color="secondary">
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

export default CreateContent