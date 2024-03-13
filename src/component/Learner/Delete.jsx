import React, { useState } from 'react';
import { Button, Typography, Container, Grid, Card, CardContent, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function DeletePage({ firstName, lastName, email }) {
    const [open, setOpen] = useState(false);

    const handleDelete = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        console.log('Cancel');
        // Redirect or perform other actions
    };

    const handleConfirmDelete = () => {
        console.log('Delete');
        // Perform delete action
        setOpen(false);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <Card sx={{ p: { xs: 2, sm: 3 }, m: 2 }}>
                        <CardContent>
                            <Grid container spacing={2} direction="column" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div">First Name: {firstName}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div">Last Name: {lastName}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="div">Email: {email}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button variant="contained" color="secondary" onClick={handleDelete} sx={{ m: 1 }}>
                                Delete
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>{"Are you sure?"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Are you sure you want to delete your profile?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                                        Yes, Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default DeletePage;
