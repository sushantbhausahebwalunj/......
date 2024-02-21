import React from 'react'
import Header2 from '../Global/Header2'
import SidebarContent from '../Global/SiderbarContent'
import Tabs from '../Global/Tabs'
import Footer2 from '../Global/Footer2'
import { Outlet } from 'react-router-dom'

function LearnerDashboard() {
  return (
    <div>
      <Header2 />
      <Tabs />
      <div style={{ display: 'flex' }}>
      <SidebarContent />
      <Outlet /> {/* This will render the child routes */}
      </div>
      <Footer2 />
    </div>
  )
}

export default LearnerDashboard;