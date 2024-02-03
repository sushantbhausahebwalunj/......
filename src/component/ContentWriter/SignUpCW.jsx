import React from "react";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";

import {
  Paper,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";


  
 
  
function SignUpCW() {

    const onSubmit = (data) => console.log(data);
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm({
      mode: "onChange",
    });
    const handleFileUpload = event => {
      const file = event.target.files[0];
      console.log(file);
      // You can add your code here to handle the file upload
    };
      
      
  return (
    <div>
      <Header />
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          margin: "auto",
          marginTop: "2%",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h3">Sign Up</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ marginTop: "4%" }}>
              For Content Writer
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg="12">
      
          <TextField
           {...register("fullName", {
            required: "Full name is required",
          })}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName?.message}
  label="Name"
  variant="outlined"
  margin="normal"
  size="small"
 
/>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid item lg={8}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
          

                <TextField
                 {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
                  label="Mobile"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  type="tel"
                  
                />
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" style={{ marginTop: "5%" }}>
                  Get OTP
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid item lg={8}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
                <TextField
                  label="Enter otp"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" style={{ marginTop: "5%" }}>
                  Verify Mobile
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid item lg={8}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
                <TextField
                 {...register("collegeEmail", {
                    required: "College email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={Boolean(errors.collegeEmail)}
                  helperText={errors.collegeEmail?.message}
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  type="email"
                />
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" style={{ marginTop: "5%" }}>
                  Get OTP
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid item lg={8}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
                <TextField
                  label="Enter Otp"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" style={{ marginTop: "5%" }}>
                  Verify Email
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
          <Grid item>
  <Button variant="contained" component="label" style={{ marginTop: "15%" }}>
    Upload File
    <input type="file" hidden onChange={handleFileUpload} />
  </Button>
</Grid>
          </Grid>

          <FormControlLabel
            control={<Checkbox />}
            label="I agree to terms and conditions and privacy policies"
            style={{ marginTop: "4%" }}
          />

          <Grid item>
            <Button type="submit" variant="contained" onClick={handleSubmit} style={{ marginTop: "4%" }}>
              Sign Up
            </Button>
            
          </Grid>
          
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid
              item
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button variant="contained" style={{ marginTop: "4%" }}>
                Google
              </Button>
            </Grid>
            <Grid
              item
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button variant="contained" style={{ marginTop: "4%" }}>
                Facebook
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </div>
  );
}



export default SignUpCW