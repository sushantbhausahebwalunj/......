import React, { useState } from 'react';
import { TextField, Button, Typography, Container,Paper,Grid ,Box} from '@mui/material';

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let error = {};

    if (!currentPassword || !newPassword || !repeatNewPassword) {
      error.message = 'All fields are required';
      isValid = false;
    } else if (currentPassword === newPassword) {
      error.message = 'New password cannot be the same as the current password';
      isValid = false;
    } else if (newPassword !== repeatNewPassword) {
      error.message = 'New password and repeat new password do not match';
      isValid = false;
    }

    setError(error);

    if (isValid) {
      // Call the backend API to change the password
    }
  };

  return (
    <Container maxWidth="xl" style={{backgroundColor:"white"}}>
     <Box display="flex" justifyContent="center">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', width: '50%' }}>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6">Change Password</Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Current Password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                error={!!error.message}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={!!error.message}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Repeat New Password"
                type="password"
                value={repeatNewPassword}
                onChange={(e) => setRepeatNewPassword(e.target.value)}
                error={!!error.message}
                fullWidth
              />
            </Grid>
            {error.message && (
              <Grid item>
                <Typography color="error">{error.message}</Typography>
              </Grid>
            )}
            <Grid item>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{backgroundColor:"#3f51b5", color:"white"}}>
                Change Password
              </Button>
            </Grid>
          </Grid>
        </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default ChangePassword;