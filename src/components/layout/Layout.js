import React from 'react'
import Icon from '../../assets/images/logo.png'
import { Outlet } from "react-router-dom"
import './Layout.scss'

const Layout = () => {
  return (
    <div className="app">
      <div className="layout">
          <div className="layout-logo-container">
            <img src={Icon} alt="icon"/>
          </div>
          <div className="layout-body-container">
            <Outlet/>
          </div>
      </div>
    </div>
  )
}

export default Layout