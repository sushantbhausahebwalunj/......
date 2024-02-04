// import React,{useRef} from "react";
// import Header from "../../Global/Header";
// import Footer from "../../Global/Footer";


// import {
//   Paper,
//   Typography,
//   Box,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Button,
//   createTheme, ThemeProvider, Container
// } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
  
// function SignupStud() {

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#000000', // Change this to the color you want
//       },
//     },
//   });

//     const onSubmit = (data) => console.log(data);
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//       control,
//       watch
//     } = useForm({
//       mode: "onChange",
//     });

//   const password = useRef({});
//   password.current = watch("password", "");

//    return (
//     <div style={{paddingTop:"5%",paddingBottom:"5%"}}>
//       <Header />
      
      
//       <Paper
//         elevation={3}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           width: "50%",
//           margin: "auto",
//           marginTop: "1%",
//           backgroundColor:"#FFE4D6"
//         }}
//       >
//         <Grid
//           container
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Grid item>
//             <Typography variant="h3">Sign Up</Typography>
//           </Grid>
//           <Grid item>
//             <Typography variant="h6" style={{ marginTop: "4%" }}>
//               For Learner
//             </Typography>
//           </Grid>
//         </Grid>
       
//         <Grid
//           container
//           direction="column"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Grid item lg="12">
//           <ThemeProvider theme={theme}>
//           <TextField
//            {...register("fullName", {
//             required: "Full name is required",
//           })}
//           error={Boolean(errors.fullName)}
//           helperText={errors.fullName?.message}
//   label="Name"
//   variant="outlined"
//   margin="normal"
//   size="small"
 
// />
// </ThemeProvider>
//           </Grid>
//           <Grid
//             item lg={12}
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
            
//           >
//             <Grid item lg={8}>
//               <ThemeProvider theme={theme}>
//               <Box display="flex" justifyContent="flex-end" marginRight={1}>
//                 <TextField
//                  {...register("phoneNumber", {
//                     required: "Phone number is required",
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: "Invalid phone number",
//                     },
//                   })}
//                   error={Boolean(errors.phoneNumber)}
//                   helperText={errors.phoneNumber?.message}
//                   label="Mobile"
//                   variant="outlined"
//                   margin="normal"
//                   size="small"
//                   type="tel"
                  
//                 />
//               </Box>
//               </ThemeProvider>
//             </Grid>
//             <Grid item lg={4}>
//               <Box display="flex" justifyContent="center">
//                 <Button variant="contained" style={{ marginTop: "5%" }}>
//                   Get OTP
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>

//           <Grid
//             item
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
//             lg={12}
//           >
//             <Grid item lg={8}>
//               <ThemeProvider theme={theme}>
//               <Box display="flex" justifyContent="flex-end" marginRight={1}>
//                 <TextField
//                   label="Enter otp"
//                   variant="outlined"
//                   margin="normal"
//                   size="small"
//                 />
//               </Box>
//               </ThemeProvider>
//             </Grid>
//             <Grid item lg={4}>
//               <Box display="flex" justifyContent="center">
//                 <Button variant="contained" style={{ marginTop: "5%" }}>
//                   Verify Mobile
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
//             lg={12}
//           >
//             <Grid item lg={8}>
//               <ThemeProvider theme={theme}>
//               <Box display="flex" justifyContent="flex-end" marginRight={1}>
//                 <TextField
//                  {...register("collegeEmail", {
//                     required: "College email is required",
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                       message: "Invalid email address",
//                     },
//                   })}
//                   error={Boolean(errors.collegeEmail)}
//                   helperText={errors.collegeEmail?.message}
//                   label="Email"
//                   variant="outlined"
//                   margin="normal"
//                   size="small"
//                   type="email"
//                 />
//               </Box>
//               </ThemeProvider>
//             </Grid>
//             <Grid item lg={4}>
//               <Box display="flex" justifyContent="center">
//                 <Button variant="contained" style={{ marginTop: "5%" }}>
//                   Get OTP
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
//             lg={12}
//           >
//             <Grid item lg={8}>
//               <ThemeProvider theme={theme}>
//               <Box display="flex" justifyContent="flex-end" marginRight={1}>
//                 <TextField
//                   label="Enter Otp"
//                   variant="outlined"
//                   margin="normal"
//                   size="small"
//                 />
//               </Box>
//               </ThemeProvider>
//             </Grid>
//             <Grid item lg={4}>
//               <Box display="flex" justifyContent="center">
//                 <Button variant="contained" style={{ marginTop: "5%" }}>
//                   Verify Email
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <ThemeProvider theme={theme}>
//             <TextField
        
            
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 8,
//                     message: "Password must have at least 8 characters",
//                   },
//                   pattern: {
//                     value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//                     message:
//                       "Password must contain minimum eight characters, at least one letter and one number",
//                   },
//                 })}
//                 type="password"
//                 label="Password"
//                 variant="outlined"
//                 margin="normal"
//                 size="small"
//                 error={Boolean(errors.password)}
//                 helperText={errors.password?.message}
            
//             />
//             </ThemeProvider>
//           </Grid>
//           <Grid item>
//             <ThemeProvider theme={theme}>
//           <TextField
//                 {...register("confirmPassword", {
//                   required: "Confirm Password is required",
//                   validate: (value) =>
//                     value === password.current || "The passwords do not match",
//                 })}
//                 type="password"
//                 label="Confirm Password"
//                 variant="outlined"
//                 margin="normal"
//                 size="small"
//                 error={Boolean(errors.confirmPassword)}
//                 helperText={errors.confirmPassword?.message}
//               />
//               </ThemeProvider>
//           </Grid>

//           <FormControlLabel
//             control={<Checkbox />}
//             label="I agree to terms and conditions and privacy policies"
//             style={{ marginTop: "1%" }}
//           />

//           <Grid item>
//             <Button type="submit" variant="contained"  onClick={handleSubmit(onSubmit)} style={{ marginTop: "4%" }}>
//               Sign Up
//             </Button>
            
//           </Grid>
          
//           <Grid
//             item
//             container
//             direction="row"
//             alignItems="center"
//             justifyContent="center"
//             lg={12}
//           >
//             <Grid
//               item
//               lg={4}
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               <Button variant="contained" style={{ marginTop: "4%" }}>
//                 Google
//               </Button>
//             </Grid>
//             <Grid
//               item
//               lg={4}
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               <Button variant="contained" style={{ marginTop: "4%" }}>
//                 Facebook
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
        
//       </Paper>
      
//       <Footer />
//     </div>
//   );
// }

// export default SignupStud



import React from 'react'

function SignupLearner() {
  return (
    <div>SignupLearner</div>
  )
}

export default SignupLearner