import { Container, Paper, Typography } from '@mui/material'
import React from 'react'


function EditProfile() {
  return (
    <Container maxWidth="xl" style={{backgroundColor:"white",padding:"2%"}}>
        <Paper elevation={3}>
            <Typography variant='h4' align="center"  style={{fontFamily: 'Trattatello'}}>Edit Profile</Typography>
        </Paper>
    </Container>
  )
}

export default EditProfile