import React from "react";
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
  Button,
} from "@mui/material";

function Signup_Common() {
  return (
    <div>
      <Header />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Paper elevation={3} style={{ display: "flex", width: "60%", padding:"3%", marginTop:"4%" }}>
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
              <RadioGroup style={{ marginLeft: "15%" }}>
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
              <Button variant="contained">Create Account</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

     <Footer />
    </div>
  );
}

export default Signup_Common;
