import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Grid, Select, Box, InputLabel, MenuItem, FormControl, Button, TextField } from '@mui/material'

function CreateContent() {

  const [domain, setDomain] = React.useState('');
  const [subDomain, setsubDomain] = React.useState('');
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
  navigate('/contentwriter/write-content', { state: { domain, subDomain, title } });
};

  const handleChangeDomain = (event) => {
    setDomain(event.target.value);
  };
  const handleChangeSubDomain = (event) => {
    setsubDomain(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
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
                    <MenuItem value="Technical">Technical</MenuItem>
  <MenuItem value="Academics">Academics</MenuItem>
  <MenuItem value="Finance">Finance</MenuItem>
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
                     <MenuItem value="Java">Java</MenuItem>
  <MenuItem value="PM">PM</MenuItem>
  <MenuItem value="Account">Account</MenuItem>
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
      <TextField 
        label="Enter Title" 
        value={title} 
        onChange={handleTitleChange} 
        variant="outlined" 
        size='small' 
        fullWidth 
      />
    </Grid>
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Button variant="contained" color="primary">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} container justifyContent="center">
              <Button variant="contained" color="secondary" onClick={handleNext}>
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
    </div>
  )
}

export default CreateContent