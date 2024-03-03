import { Container, Typography, Paper, Box, Grid, TextField, Button, InputAdornment } from '@mui/material';
import React from 'react';

function InviteProfile() {
  const inviteUrl = 'Abyaskar.com/index';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteUrl);
    alert('Invite URL copied!');
  };

  return (
    <Container maxWidth="xl" style={{backgroundColor:"white", padding:"1rem"}}>
      <Box display="flex" justifyContent="center">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', width: '40%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Invite your friends and explore endless learning possibilities at Abhyaskar</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Invite URL</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                value={inviteUrl} 
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button variant="contained" onClick={copyToClipboard} style={{backgroundColor:"#3f51b5", color:"white"}} >
                        Copy
                      </Button>
                    </InputAdornment>
                  ),
                }} 
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default InviteProfile;