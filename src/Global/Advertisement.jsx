import { Typography, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function Advertisement() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center" style={{ backgroundColor: "#D2E0FB" }}>
        <Grid item>
          <Typography>ADVERTISEMENT</Typography>
        </Grid>
        <Grid container style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
          <Grid item xs={12} style={{ padding: isSmallScreen ? '1%' : '2%' }}>
            <Paper elevation={1} style={{ width: '100%', overflow: 'auto', wordWrap: 'break-word' }}>
              <Typography m={8}>Adv1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ padding: isSmallScreen ? '1%' : '2%' }}>
            <Paper elevation={1} style={{ width: '100%', overflow: 'auto', wordWrap: 'break-word' }}>
              <Typography m={8}>Adv1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ padding: isSmallScreen ? '1%' : '2%' }}>
            <Paper elevation={1} style={{ width: '100%', overflow: 'auto', wordWrap: 'break-word' }}>
              <Typography m={8}>Adv1</Typography>
            </Paper>
          </Grid>
          {/* ... */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Advertisement;