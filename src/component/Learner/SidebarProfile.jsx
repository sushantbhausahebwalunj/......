import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { 
  Dashboard,
  PersonAddAltOutlined,
  ManageAccountsOutlined,
  NoteAltOutlined,
  DescriptionOutlined,
  AccountCircle,
  ExitToApp,
  VpnKey ,
  Edit,
  LibraryBooks,
  Bookmark,
  DeleteForever,
  PersonAdd,
  Home,
  Person,
  Assignment,
  AccountBalance,
  AddCircleOutline,
  RateReviewOutlined,
  Add as AddIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Typography, Button,IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setCollapse(isSmallScreen);
  }, [isSmallScreen]);



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
      <Sidebar className={`sidebar-container ${isCollapsebar ? 'toggled' : ''}`}>
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
</div>

        <MenuItem icon={<AccountCircle />} component={<Link to="/learner/profile"/>}>Profile</MenuItem>
        <MenuItem icon={<VpnKey  />} component={<Link to="/learner/profile/change-pass"/>}>Change Password</MenuItem>
        <MenuItem icon={<Edit/>} component={<Link to="/learner/profile/edit-profile"/>}>Edit Profile</MenuItem>
        <MenuItem icon={<LibraryBooks />} component={<Link to="/learner/profile/articles"/>}>Articles</MenuItem>
        <MenuItem icon={<Bookmark  />} component={<Link to="/learner/profile/saved-articles"/>}> Saved Articles</MenuItem>
        <MenuItem icon={<DeleteForever/>} component={<Link to="/learner/profile/request-todel"/>}>Request to Delete</MenuItem>
        <MenuItem icon={<PersonAdd />} component={<Link to="/learner/profile/invite"/>}>Invite</MenuItem>
        <MenuItem icon={<ExitToApp />} component={<Link to="/learner/profile/logout"/>}>Logout</MenuItem>
        
          {/* <SidebarSubMenu icon={<Home />} label="Home">
            <SidebarMenuItem icon={<Dashboard />}>Dashboard</SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<Person />} label="Student">
            <SidebarSubMenu icon={<AddCircleOutline />} label="Add Student">
              <SidebarMenuItem component={<Link to="student/add-single" />} icon={<PersonAddAltOutlined />}>Single Student</SidebarMenuItem>
              <SidebarMenuItem component={<Link to="student/add-multiple" />} icon={<PersonAddAltOutlined />}>Multiple Student</SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarMenuItem component={<Link to="student/manage-student" />} icon={<ManageAccountsOutlined />}>Manage Student</SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<Assignment />} label="Test">
            <SidebarMenuItem component={<Link to="test/create-test" />} icon={<NoteAltOutlined />}>Create Test</SidebarMenuItem>
            <SidebarMenuItem component={<Link to="test/manage-test" />} icon={<DescriptionOutlined />}>Manage Test</SidebarMenuItem>
            <SidebarMenuItem  component={<Link to="test/allocate-test" />}icon={<DescriptionOutlined />}>Allocate Test</SidebarMenuItem>
            <SidebarMenuItem component={<Link to="test/results" />} icon={<ManageAccountsOutlined />}>Results</SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<LibraryBooks />} label="Question Bank">
            <SidebarSubMenu icon={<AddCircleOutline />} label="Add Question Bank">
              <SidebarMenuItem component={<Link to="question/add-single" />} icon={<DescriptionOutlined />}>Single Question</SidebarMenuItem>
              <SidebarMenuItem component={<Link to="question/add-multiple" />} icon={<DescriptionOutlined />}>Multiple Question</SidebarMenuItem>
            </SidebarSubMenu>
            <SidebarMenuItem component={<Link to="question/manage-question" />} icon={<DescriptionOutlined />}>Manage Question</SidebarMenuItem>
          </SidebarSubMenu>
          <SidebarSubMenu icon={<AccountBalance />} label="Account">
            <SidebarMenuItem icon={<AccountCircle />}>Profile</SidebarMenuItem>
            <SidebarMenuItem icon={<ExitToApp />}>Logout</SidebarMenuItem>
          </SidebarSubMenu> */}
        </Menu>
      </Sidebar>
    );
};

  export const handleToggleCollapse = () => 
  {
  toggleCollapseLogic(setCollapse);
  };

export default SidebarCW;