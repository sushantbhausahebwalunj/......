import React, { useState } from 'react';
import Header2 from '../Global/Header2';
import Tabs from '../Global/Tabs';
import SidebarContent from '../Global/SiderbarContent';
import Footer2 from '../Global/Footer2';
import { Outlet, useLocation } from 'react-router-dom';

function LearnerDashboard() {
  const [currentSelection, setCurrentSelection] = useState('');

  // This function will be passed to Tabs to update the current selection
  const handleMenuSelection = (selection) => {
    setCurrentSelection(selection);
  };

  const location = useLocation();

  return (
    <div>
      <Header2 />
      {location.pathname.startsWith('/learner/profile') ? <></> : <Tabs />}
      <div style={{ display: 'flex' }}>
        {/* The SidebarContent receives the currentSelection as a prop */}
        {location.pathname.startsWith('/learner/profile') ? null : <SidebarContent currentSelection={currentSelection} />}
        <Outlet /> {/* This will render the child routes */}
      </div>
      <Footer2 />
    </div>
  );
}

export default LearnerDashboard;
