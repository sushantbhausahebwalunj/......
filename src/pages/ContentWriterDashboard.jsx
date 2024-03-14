import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Global/Header'
import Footer2 from '../Global/Footer2'
import SidebarCW from '../Global/SidebarCW'
import SearchIcon from '@mui/icons-material/Search';


function ContentWriterDashboard() {
  return (
    <div>
    <Header/>
    <div style={{ display: 'flex' }}>
        <SidebarCW/>
        <Outlet/>
    </div>
    <Footer2/>
</div>
  )
}

export default ContentWriterDashboard;