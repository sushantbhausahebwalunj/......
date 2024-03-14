import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { 
  Dashboard,
  PersonAddAltOutlined,
  ManageAccountsOutlined,
  NoteAltOutlined,
  DescriptionOutlined,
  AccountCircle,
  ExitToApp,
  Home,
  Person,
  Assignment,
  LibraryBooks,
  AccountBalance,
  AddCircleOutline,
  RateReviewOutlined,
  Add as AddIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Typography, Button,IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


const SidebarMenuItem = ({ component, icon, label, children }) => (
  <MenuItem component={component} icon={icon}>{label}{children}</MenuItem>
);

const SidebarSubMenu = ({ icon, label, children }) => (
  <SubMenu icon={icon} label={label}>{children}</SubMenu>
);

const toggleCollapseLogic = (setCollapse) => {
  setCollapse((prevCollapse) => !prevCollapse);
};

export const SidebarCW = () => {
  const [photo, setPhoto] = useState('/path/to/default/photo.jpg');
  const [isCollapsebar, setCollapse] = useState(false);

  const toggleCollapse = () => {
    toggleCollapseLogic(setCollapse);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPhoto('/path/to/default/photo.jpg');
    }
  };

    return (
      <Sidebar collapsed={isCollapsebar} className={`sidebar-container ${isCollapsebar ? 'collapsed' : ''}`}>
        <Menu iconShape="square">
          {/* <MenuItem icon={<MenuIcon />} onClick={''}></MenuItem> */}
          <MenuItem icon={<MenuIcon />} onClick={toggleCollapse}></MenuItem>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1em' }}>
  <div style={{ position: 'relative' }}>
    <input
      accept="image/*"
      style={{ display: 'none' }}
      id="upload-photo"
      type="file"
      onChange={handleUpload}
      disabled={isCollapsebar}
    />
    <label htmlFor="upload-photo">
      <Avatar 
        src={photo} 
        style={{ 
          width: isCollapsebar ? '1.5em' : '3em', 
          height: isCollapsebar ? '1.5em' : '3em', 
          cursor: 'pointer' 
        }} 
      />
    </label>
  </div>
  {!isCollapsebar && <Typography variant="h6" style={{ marginTop: '0.5em' }}>Username</Typography>}
  {isCollapsebar ? 
    <IconButton color="black" style={{ margin: '1em 0' }}>
      <AddIcon />
    </IconButton> :
    <Button 
    
      variant="contained" 
      startIcon={<AddIcon />} 
      style={{ margin: '1em 0', borderRadius: '20px' , backgroundColor: 'black', color: 'white' }}
      component={Link}
      to="/contentwriter/create-content"
    >
      Create
    </Button>
  }
</div>

        <MenuItem icon={<RateReviewOutlined />} component={<Link to="/review"/>}>Reviews</MenuItem>
        <MenuItem icon={<AccountCircle />} component={<Link to="/review"/>}>My Profile</MenuItem>
        <MenuItem icon={<ExitToApp />} component={<Link to="/review"/>}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    );
};

  export const handleToggleCollapse = () => 
  {
  toggleCollapseLogic(setCollapse);
  };

export default SidebarCW;
