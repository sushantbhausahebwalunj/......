// import React from "react";
// import Header from "../Global/Header";
// import Footer from "../Global/Footer";
// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
// import {
//   Typography,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Grid,
//   Button,
// } from "@mui/material";

// function Signup_Common() {
//   return (
//     <div>
//       <Header />
//       <Container style={{ display: "flex", justifyContent: "center" }}>
//         <Paper elevation={3} style={{ display: "flex", width: "50%", padding:"3%", marginTop:"4%" }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={12}>
//               <Typography
//                 variant="h5"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "10px",
//                 }}
//               >
//                 How do you want to use Abyaskar?
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <Typography
//                 variant="h6"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "10px",
//                 }}
//               >
//                 This will help to personalize the experience
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={12}>
//               <RadioGroup style={{ marginLeft: "15%" }}>
//                 <FormControlLabel
//                   value="option1"
//                   control={<Radio />}
//                   label="Continue as Student/Developer"
//                   style={{ margin: "10px 0" }}
//                 />
//                 <FormControlLabel
//                   value="option2"
//                   control={<Radio />}
//                   label="Continue as a Content Writer"
//                   style={{ margin: "10px 0" }}
//                 />
//                 <FormControlLabel
//                   value="option3"
//                   control={<Radio />}
//                   label="Continue as Mentor"
//                   style={{ margin: "10px 0" }}
//                 />
//               </RadioGroup>
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               sm={12}
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Button variant="contained">Create Account</Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>

//      <Footer />
//     </div>
//   );
// }

// export default Signup_Common;






// import React, { useState } from "react";
// import Header from "../Global/Header";
// import Footer from "../Global/Footer";
// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
// import {
//   Typography,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Grid,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Slide
// } from "@mui/material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

// function Signup_Common() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [open, setOpen] = useState(false);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleClickOpen = () => {
//     if (selectedOption) {
//       setOpen(true);
//     } else {
//       alert('Please select an option.');
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let dialogTitle = '';
// switch (selectedOption) {
//   case 'option1':
//     dialogTitle = 'Learner Instruction';
//     break;
//   case 'option2':
//     dialogTitle = 'Content Writer Instruction';
//     break;
//   case 'option3':
//     dialogTitle = 'Mentor Instruction';
//     break;
//   default:
//     dialogTitle = 'Confirmation';
// }

//   let confirmMessage = '';
//   switch (selectedOption) {
//     case 'option1':
//       confirmMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
//       break;
//     case 'option2':
//       confirmMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
//       break;
//     case 'option3':
//       confirmMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
//       break;
//     default:
//       confirmMessage = 'Please select an option.';
//   }

//   return (
//     <div>
//       <Header />
//       <Container style={{ display: "flex", justifyContent: "center" }}>
//         <Paper elevation={3} style={{ display: "flex", width: "50%", padding:"3%", marginTop:"10%" }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={12}>
//               <Typography
//                 variant="h5"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "10px",
//                 }}
//               >
//                 How do you want to use Abhyaskar?
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <Typography
//                 variant="h6"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   padding: "10px",
//                 }}
//               >
//                 This will help to personalize the experience
//               </Typography>
//             </Grid>

//             <Grid item xs={12} sm={12}>
//               <RadioGroup style={{ marginLeft: "15%" }} onChange={handleOptionChange}>
//                 <FormControlLabel
//                   value="option1"
//                   control={<Radio />}
//                   label="Continue as Student/Developer"
//                   style={{ margin: "10px 0" }}
//                 />
//                 <FormControlLabel
//                   value="option2"
//                   control={<Radio />}
//                   label="Continue as a Content Writer"
//                   style={{ margin: "10px 0" }}
//                 />
//                 <FormControlLabel
//                   value="option3"
//                   control={<Radio />}
//                   label="Continue as Mentor"
//                   style={{ margin: "10px 0" }}
//                 />
//               </RadioGroup>
//             </Grid>
//             <Grid
//               container
//               item
//               xs={12}
//               sm={12}
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Button variant="contained" onClick={handleClickOpen}>Create Account</Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>

//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{dialogTitle}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             {confirmMessage}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button variant="contained" color="secondary" onClick={handleClose}>Disagree</Button>
//           <Button variant="contained" color="primary" onClick={handleClose}>Agree</Button>
//         </DialogActions>
//       </Dialog>

//       <Footer />
//     </div>
//   );
// }

// export default Signup_Common;



import React, { useState } from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button
} from "@mui/material";
import SignupInstruction from './Signup_instruction';

function Signup_Common() {
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClickOpen = () => {
    if (selectedOption) {
      setOpen(true);
    } else {
      alert('Please select an option.');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} style={{ display: "flex", width: "50%", padding:"3%", marginTop:"10%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                {/* Sign Up as */}
               How do you want to use Abhhyaskar
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                This will help to personalize your experience
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <RadioGroup style={{ marginLeft: "15%" }} onChange={handleOptionChange}>
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Learner"
                  style={{ margin: "10px 0" }}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Content Writer"
                  style={{ margin: "10px 0" }}
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Mentor"
                  style={{ margin: "10px 0" }}
                />
              </RadioGroup>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={12}
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained" onClick={handleClickOpen}>Create Account</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <SignupInstruction
        open={open}
        handleClose={handleClose}
        selectedOption={selectedOption}
      />

      <Footer />
    </div>
  );
}

export default Signup_Common;







