import React, { useRef } from "react";
import { useState } from 'react';
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";


const defaultTheme = createTheme();

export default function SignupMentor() {

  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    mode: "onChange",
  });

  const password = useRef({});
  password.current = watch("password", "");
  const [isChecked, setIsChecked] = useState(false);
  // for upload button
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  //For Uploading the file 
  const [fileName, setFileName] = useState('Upload Resume');



  function Term() {
    return (
      <Box style={{ marginTop: "2.7%" }}>
        <Typography variant="body2" color="text.secondary">
          {'I agree to '}
          <Link color="inherit" href="https://abhyaskar.com/">
            terms and conditions
          </Link>{' '}
          {' and '}
          <Link color="inherit" href="https://abhyaskar.com/">
            privacy policies.
          </Link>{' '}
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm" >
          <Card elevation={3} style={{ paddingLeft: "5%", paddingRight: "5%", margin: "3%", paddingBottom: "4%" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h2">
                Sign up
              </Typography>
              <Typography component="h6" variant="h6">
                For Content Writer
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("firstName", {
                        required: "FirstName is required",
                      })}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("lastName", {
                        required: "LastName is required",
                      })}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName?.message}
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        {fileName}
                        <input
                          type="file"
                          hidden
                          onChange={(e) => setFileName(e.target.files[0].name)}
                        />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                      }
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Term />
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isChecked}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} justifyContent="center" style={{ marginTop: "2%" }}>
                    <Grid item xs={12} sm={6}>
                      <Button variant="outlined" startIcon={<FcGoogle />} style={{ backgroundColor: "", width: '100%' }}>
                        Google
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button variant="outlined" startIcon={<FaFacebook />} style={{ backgroundColor: "", width: '100%' }}>
                        Facebook
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}