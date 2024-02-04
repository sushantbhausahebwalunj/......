import React from 'react'
import Header from '../../Global/Header'
import Footer from '../../Global/Footer'
import { Container,Card ,Typography,CardContent,Box,Grid} from '@mui/material'

function ApprovalCW() {
  return (
    <div>
      <Header />
      <Container style={{marginTop:"2%"}}>
      <Box display="flex" justifyContent="center">
  <Card elevation={5} style={{ width: '50%' , marginTop:"5%", height:"50vh",padding:"5%",backgroundColor:"#FFE4D6"}}>
    <CardContent>
    <Grid container direction="column">
      <Grid item>
        <Typography variant='h6' align='center'>
          We have received your profile request our team will proceed and approve the profile.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align='center' style={{ marginTop: "5%" }}>
          You will receive the Confirmation Email with Reset Password link.
        </Typography>
      </Grid>
    </Grid>
    </CardContent>  
  </Card>
</Box>
      </Container>
      <Footer />
    </div>
  )
}

export default ApprovalCW