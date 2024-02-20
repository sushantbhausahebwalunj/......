import React from "react";
import NavBar from "../../Global/NavBar";
import Tabs from "../../Global/Tabs";
import SearchIcon from "@mui/icons-material/Search";
import Advertisement from "../../Global/Advertisement";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import FunImage from "../../assets/fun-learning.webp";
import DomainImage from "../../assets/Alldomains.jpg";

function LandingPageLearner() {

  const itCards = [
    { title: "C", content: "This is card 1" },
    { title: "C++", content: "This is card 2" },
    { title: "Java", content: "This is card 3" },
    { title: "Python", content: "This is card 4" },
    { title: "C#", content: "This is card 5" },
    { title: "Php", content: "This is card 6" },
    // Add more objects for more cards
  ];

  const mechanicalCards = [
    { title: "Thermodynamics", content: "This is card 1" },
    { title: "Heat transfer", content: "This is card 2" },
    { title: "Manufacturing", content: "This is card 3" },
    { title: "Composites", content: "This is card 4" },
    { title: "Dynamics", content: "This is card 5" },
    { title: "Kinematics", content: "This is card 6" },
    // Add more objects for more cards
  ];

  return (
    <div>
      <NavBar />
      <Tabs />
      <div style={{backgroundColor:"white"}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={10} style={{ backgroundColor: "white" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            height="auto"
          >
            <Typography variant="h3" mt={7}>
              Abhyaskar
            </Typography>
            <Typography variant="h4">One Stop for all learnings</Typography>
            <TextField
              label="Search"
              variant="outlined"
              style={{
                width: "40%",
                marginTop: "5px",
                backgroundColor: "white",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={10}
                >
                  <Typography variant="h4">Fun Learning</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <img
                    src={FunImage}
                    alt="description"
                    style={{ width: "70%" }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                >
                  <img
                    src={DomainImage}
                    alt="description"
                    style={{ width: "70%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={10}
                >
                  <Typography variant="h4">Touching all domains</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Box bgcolor="#D2E0FB" mt={2} mb={2}>
              <Typography variant="h5">Courses</Typography>
            </Box>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2} mb={2}>
                <Divider>
                  <Box component="span" p={1}>
                    <Typography variant="body1">IT</Typography>
                  </Box>
                </Divider>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              {itCards.map((cardContent, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">{cardContent.title}</Typography>
                      <Typography variant="body2">
                        {cardContent.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2} mb={2}>
                <Divider>
                  <Box component="span" p={1}>
                    <Typography variant="body1">Mechanical</Typography>
                  </Box>
                </Divider>
              </Box>
            </Grid>
            <Grid container spacing={2}>
  {mechanicalCards.map((cardContent, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <Card>
        <CardContent>
          <Typography variant="h5">{cardContent.title}</Typography>
          <Typography variant="body2">
            {cardContent.content}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <div style={{ backgroundColor: "white" }}>
            <Advertisement />
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default LandingPageLearner;
