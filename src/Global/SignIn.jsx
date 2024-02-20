import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm} from "react-hook-form";
import { useState } from "react";




const defaultTheme = createTheme();

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
  };

 

  return (
    <div>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ marginTop: "3.5%", paddingTop: "1%" }}
        >
          <Card elevation={3} style={{ padding: "5%", paddingTop: "0%" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {isForgotPassword ? (
                <>
                  <Typography component="h1" variant="h5">
                    Forgot Password
                  </Typography>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      
                      autoFocus
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Send Reset Link
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link
                          href="#"
                          variant="body2"
                          onClick={handleBackToLogin}
                        >
                          Back to Login
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              ) : (
                <>
                  <Typography component="h1" variant="h4">
                    Sign in
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                     
                      autoFocus
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                    <TextField
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                          message:
                            "Password must contain minimum eight characters, at least one letter, one number, and one special character",
                        },
                      })}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs={5}>
                        <Link
                          href="#"
                          variant="body2"
                          onClick={handleForgotPassword}
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item xs={7}>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
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
                </>
              )}
            </Box>
          </Card>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
    
  );
}