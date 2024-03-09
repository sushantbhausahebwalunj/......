import React from 'react'
import Header2 from '../Global/Header2'
import SidebarContent from '../Global/SiderbarContent'
import Tabs from '../Global/Tabs'
import Footer2 from '../Global/Footer2'
import SidebarProfile from '../Global/SidebarProfile'
import { Outlet, useLocation  } from 'react-router-dom'

function LearnerDashboard() {

  const location = useLocation();

  return (
    <div>
      <Header2 />
      {location.pathname.startsWith('/learner/profile') ? <></> : <Tabs />}
      <div style={{ display: 'flex' }}>
      {location.pathname.startsWith('/learner/profile') ? <SidebarProfile /> : <SidebarContent />}
        <Outlet /> {/* This will render the child routes */}
      </div>
      <Footer2 />
    </div>
  )
}

export default LearnerDashboard;




