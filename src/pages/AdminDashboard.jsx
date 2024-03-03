import React from 'react'
import Header from '../Global/Header'
import Sidebar from '../Global/SidebarCW'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <Header />
        <div style={{ display: 'flex' }}>
        <Sidebar />
       <Outlet />
       </div>
    </div>
  )
}

export default AdminDashboard