import React, { useRef } from "react";
import { useState } from 'react';
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
                For Mentor
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      error={Boolean(errors.fullName)}
                      helperText={errors.fullName?.message}
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
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      error={Boolean(errors.fullName)}
                      helperText={errors.fullName?.message}
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
                      {...register("collegeEmail", {
                        required: "College email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={Boolean(errors.collegeEmail)}
                      helperText={errors.collegeEmail?.message}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                        pattern: {
                          value: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
                          message:
                            "Password must contain minimum eight characters, at least one letter and one number",
                        },
                      })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === password.current || "The passwords do not match",
                      })}
                      error={Boolean(errors.confirmPassword)}
                      helperText={errors.confirmPassword?.message}
                      required
                      fullWidth
                      name="password"
                      label="Confirm Password"
                      type="password"
                      id="Cnf-password"
                      autoComplete="new-password"
                    />
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
                  <Stack direction="row" spacing={2} style={{ marginLeft: "25%", marginTop: "2%" }}>
                    <Button variant="outlined" startIcon={<FcGoogle />} style={{ backgroundColor: "pink" }}>
                      Google
                    </Button>
                    <Button variant="outlined" startIcon={<FaFacebook />} style={{ backgroundColor: "pink" }}>
                      Facebook
                    </Button>
                  </Stack>
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