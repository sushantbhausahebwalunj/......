import React,{useRef,useState} from "react";
import Header from "../../Global/Header";
import Footer from "../../Global/Footer";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm, Controller } from "react-hook-form";
import { styled } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  createTheme, ThemeProvider
} from "@mui/material";

  
function SignupCW() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000', // Change this to the color you want
      },
    },
  });

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

    const [fileName, setFileName] = useState('');
  const password = useRef({});
  password.current = watch("password", "");

  
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
          marginTop: "1%",
          padding:"1%",
          backgroundColor:"#FFE4D6"
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
          <ThemeProvider theme={theme}>
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
  style={{ backgroundColor: 'white' }}
 
/>
</ThemeProvider>
          </Grid>
          <Grid
            item lg={12}
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            
          >
            <Grid item lg={8}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
          
              <ThemeProvider theme={theme}>
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
                  style={{ backgroundColor: 'white' }}
                  
                />
                </ThemeProvider>
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
            <ThemeProvider theme={theme}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
                <TextField
                  label="Enter otp"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  style={{ backgroundColor: 'white' }}
                />
              </Box>
              </ThemeProvider>
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
            <ThemeProvider theme={theme}>
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
                  style={{ backgroundColor: 'white' }}
                />
              </Box>
              </ThemeProvider>
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
              <ThemeProvider theme={theme}>
              <Box display="flex" justifyContent="flex-end" marginRight={1}>
                <TextField
                  label="Enter Otp"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  style={{ backgroundColor: 'white' }}
                />
              </Box>
              </ThemeProvider>
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
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Resume
      <VisuallyHiddenInput type="file" 
      onChange={(event) => {
        const file = event.target.files[0];
        setFileName(file.name);
      }}/>
    </Button>
  {fileName && <Typography variant="body1">{fileName}</Typography>}
          </Grid>

          <FormControlLabel
            control={<Checkbox />}
            label="I agree to terms and conditions and privacy policies"
            style={{ marginTop: "1%" }}
          />

          <Grid item>
            <Button type="submit" variant="contained"  onClick={handleSubmit(onSubmit)} style={{ marginTop: "4%" }}>
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

export default SignupCW