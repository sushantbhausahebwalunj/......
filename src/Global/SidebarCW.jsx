// import React from 'react';
// import { Button, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import ArticleIcon from '@mui/icons-material/Article';
// import RateReviewIcon from '@mui/icons-material/RateReview';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';

// function SidebarCW() {
//   return (
//     <div style={{ padding: '1em' }}>
//       <Avatar style={{ margin: 'auto', marginBottom: '1em' }}>A</Avatar>
//       <h2 style={{ textAlign: 'center' }}>Username</h2>
//       <Button variant="contained" startIcon={<AddIcon/>} style={{ margin: '1em 0' }}>
//         Create
//       </Button>
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <ArticleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Articles" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <RateReviewIcon />
//           </ListItemIcon>
//           <ListItemText primary="Reviews" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <AccountCircleIcon />
//           </ListItemIcon>
//           <ListItemText primary="My Profile" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <LogoutIcon />
//           </ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       </List>
//     </div>
//   );
// }

// export default SidebarCW;



// import React from 'react';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import { FaPlus, FaBookOpen, FaStar, FaUser, FaSignOutAlt } from 'react-icons/fa';

// function SidebarCW() {
//   return (
//     <ProSidebar>
//       <Menu iconShape="square">
//         <MenuItem icon={<FaUser />}>Username</MenuItem>
//         <MenuItem icon={<FaPlus />}>Create</MenuItem>
//         <MenuItem icon={<FaBookOpen />}>Articles</MenuItem>
//         <MenuItem icon={<FaStar />}>Reviews</MenuItem>
//         <MenuItem icon={<FaUser />}>My Profile</MenuItem>
//         <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
//       </Menu>
//     </ProSidebar>
//   );
// }

// export default {
//     optimizeDeps: {
//       include: ['react-pro-sidebar']
//     }
//   }



// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import ArticleIcon from '@mui/icons-material/Article';
// import ReviewIcon from '@mui/icons-material/RateReview';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/ExitToApp';

// function SidebarCW() {
//   return (
//     <Drawer variant="permanent">
//       <List>
//         <ListItem>
//           <ListItemIcon>
//             <AccountCircleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Username" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <AddIcon />
//           </ListItemIcon>
//           <ListItemText primary="Create" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ArticleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Articles" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ReviewIcon />
//           </ListItemIcon>
//           <ListItemText primary="Reviews" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <AccountCircleIcon />
//           </ListItemIcon>
//           <ListItemText primary="My Profile" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <LogoutIcon />
//           </ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// }

// export default SidebarCW;



// Sidebar.jsx
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

        <MenuItem icon={<DescriptionOutlined />} component={<Link to="/articles"/>}>Articles</MenuItem>
        <MenuItem icon={<RateReviewOutlined />} component={<Link to="/review"/>}>Reviews</MenuItem>
        <MenuItem icon={<AccountCircle />} component={<Link to="/review"/>}>My Profile</MenuItem>
        <MenuItem icon={<ExitToApp />} component={<Link to="/review"/>}>Logout</MenuItem>
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
