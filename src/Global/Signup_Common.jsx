import React, { useState } from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Button,
  Box
} from "@mui/material";
import SignupInstruction from './Signup_instruction';

function Signup_Common() {
  const navigate = useNavigate();
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

  const handleAgree = () => {
    switch (selectedOption) {
      case 'option1':
        navigate('/signup/learner');
        break;
      case 'option2':
        navigate('/signup/contentwriter');
        break;
      default:
        alert('Please select an option.');
    }
  };

  return (
    
    <div>
      <Header />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} style={{ display: "flex", width: "50%", padding:"3%", marginTop:"3.5%" }}>
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
               How do you want to use Abhyaskar
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
      handleAgree={handleAgree} // pass the handleAgree function
    />

      <Footer />
    </div>
   
  );
}

export default Signup_Common;







