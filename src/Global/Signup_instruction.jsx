import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SignupInstruction({ open, handleClose, handleAgree, selectedOption }) {
  let dialogTitle = '';
  switch (selectedOption) {
    case 'option1':
      dialogTitle = 'Instruction';
      break;
    case 'option2':
      dialogTitle = 'Instruction';
      break;
    case 'option3':
      dialogTitle = 'Instruction';
      break;
    default:
      dialogTitle = 'Confirmation';
  }

  let confirmMessage = '';
  switch (selectedOption) {
    case 'option1':
    case 'option2':
    case 'option3':
      confirmMessage = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
      break;
    default:
      confirmMessage = 'Please select an option.';
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {confirmMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>Disagree</Button>
        <Button variant="contained" color="primary" onClick={handleAgree}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}