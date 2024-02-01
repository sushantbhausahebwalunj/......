import React from "react";
import { useForm, Controller } from "react-hook-form";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Hd, TvOffSharp } from "@mui/icons-material";
import { List, ListItem } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

const MyList = () => {
  console.log("Entered");
  return (
    <List
      disablePadding={true}
      dense={true}
      sx={{
        listStyleType: "disc",
        listStylePosition: "inside",
      }}
      style={{ fontSize: "12px" }}
    >
      <ListItem sx={{ display: "list-item" }}>
        <strong>Full Name:</strong> This field should capture the student's full
        legal name.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        <strong>Mobile Number:</strong> This field should capture the student's
        mobile phone number.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        <strong>College Email Id:</strong> This field should capture the
        student's college email address.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        <strong>Personal Email Id:</strong> This field should capture the
        student's personal email address. This will be used for login.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        <strong>Date of Birth:</strong> This field should capture the student's
        date of birth. Use a calendar control to make it easy for users to enter
        this information.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        <strong>Gender:</strong> This field should capture the student's gender.
        Use a drop-down menu with options for male, female, and other.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Password will be sent to the student's Personal Email address along with
        a verification link.
      </ListItem>
    </List>
  );
};

const AddSingle = () => {
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
  });

  return (
    <Container
      style={{
        // border: "1px solid black",
        marginLeft: "18%",
        marginTop: "3%",
        backgroundColor: "#F0F4FB",
        paddingRight: "20%",
        paddingBottom: "10%",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        style={{ marginTop: "5%", marginLeft: "10%", padding: "1%" }}
      >
        Add Single Student
      </Typography>
      <Paper
        style={{
          width: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
          padding: "", // Remove or reduce the padding
          justifyContent: "space-between",
          height: "calc(100% - 10px)",
          marginTop: "2%",
          marginLeft: "10%",
          marginRight: "1%",
        }}
      >
        <Card style={{ flex: 2 }}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="profile" style={{ color: "black" }}>
                  Full Name :
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName?.message}
                  id="fullName"
                  size="small"
                  variant="outlined"
                  fullWidth
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="phoneNumber" style={{ color: "black" }}>
                  Mobile Number :
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
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
                  id="phoneNumber"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="collegeEmail" style={{ color: "black" }}>
                  College Email Id :
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  //               InputLabelProps={{
                  //   style: { fontSize: "0.8rem" }, // Reduce the font size of the label
                  // }}
                  // InputProps={{
                  //   style: { height: "1.8rem", padding: "0 0.5rem" }, // Reduce the size of the text field
                  // }}
                  {...register("collegeEmail", {
                    required: "College email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={Boolean(errors.collegeEmail)}
                  helperText={errors.collegeEmail?.message}
                  id="collegeEmail"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="personalEmail" style={{ color: "black" }}>
                  Personal Email Id:
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  {...register("personalEmail", {
                    required: "Personal email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={Boolean(errors.personalEmail)}
                  helperText={errors.personalEmail?.message}
                  id="personalEmail"
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardContent style={{ paddingBottom: 0 }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="dob" style={{ color: "black" }}>
                  Date of Birth :
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  // InputLabelProps={{
                  //   style: { fontSize: "0.8rem" }, // Reduce the font size of the label
                  // }}
                  // InputProps={{
                  //   style: { height: "1.8rem", padding: "0 0.5rem" }, // Reduce the size of the text field
                  // }}
                  {...register("dob", {
                    required: "Date of birth is required",
                  })}
                  error={Boolean(errors.dob)}
                  helperText={errors.dob?.message}
                  id="dob"
                  variant="outlined"
                  fullWidth
                  type="date"
                  size="small"
                  shrink={true}
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardContent style={{ paddingBottom: "20px" }}>
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor="gender" style={{ color: "black" }}>
                  Gender :
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      variant="outlined"
                      fullWidth
                      size="small"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <FormHelperText error>{errors.gender.message}</FormHelperText>
                )}
              </Grid>
            </Grid>
          </CardContent>
          <Grid
            container
            justifyContent="center"
            style={{ marginTop: "5%", marginLeft: "15%" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Card>

        <Card style={{ flex: 1, padding: "1%", margin: "0" }}>
          <CardContent style={{ paddingBottom: 0 }}>
            <Card style={{ padding: "0%", margin: "0%" }}>
              <CardContent style={{ paddingTop: "0", paddingBottom: "0" }}>
                <Grid container direction="column" alignItems="center">
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    align="center"
                  >
                    Instructions
                  </Typography>
                  <List
                    disablePadding={true}
                    dense={true}
                    sx={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                    }}
                    style={{ fontSize: "15%", lineHeight: "1.2" }} // Reduced font size and adjusted line height
                  >
                    {<MyList />}
                  </List>
                </Grid>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default AddSingle;