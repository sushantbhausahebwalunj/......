import React from 'react'
import {Outlet} from 'react-router-dom'
import Header2 from '../Global/Header2'
import SidebarCW from '../Global/SidebarCW'

function ContentWriterDashboard() {
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

export default ContentWriterDashboard;