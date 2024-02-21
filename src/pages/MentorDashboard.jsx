import React from 'react'
import Header2 from '../Global/Header2'
import SidebarCW from '../Global/SidebarCW'
import Footer2 from '../Global/Footer2'
import {Outlet} from 'react-router-dom'

function MentorDashboard() {
  return (
    <div>
    <Header2/>
    <div style={{ display: 'flex' }}>
        <SidebarCW/>
        <Outlet/>
    </div>
    <Footer2/>
</div>
  )
}

export default MentorDashboard