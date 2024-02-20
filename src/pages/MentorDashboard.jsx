import React from 'react'
import Header2 from '../Global/Header2'
import SidebarCW from '../Global/SidebarCW'
import {Outlet} from 'react-router-dom'

function MentorDashboard() {
  return (
    <div>
    <Header2/>
    <div style={{ display: 'flex' }}>
        <SidebarCW/>
        <Outlet/>
    </div>
</div>
  )
}

export default MentorDashboard