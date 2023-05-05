import React from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <div className="row">
    <div className="col-md-12  text-white text-center" style={{backgroundColor: '#223366'}}>
      <h3>ADMIN</h3>
    </div>
  </div>
<div className="row">
  <section className="col-md-12 d-flex">
  <div className="col-md-2">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <img src="img/find_user.png" style={{backgroundColor: '#0077b6'}} alt />
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light  p-3" style={{backgroundColor: '#223366'}} to="/login">Login</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#0077b6'}} to="/">Dashboard</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light  p-3" style={{backgroundColor: '#223366'}} to="/manage_user">Manage_User</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#0077b6'}} to="/manage_contact">Manage_Contact</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#223366'}} to="/"></NavLink>
        </div>
      </div>
    </div>
 
<div classname="col-md-10">
    <h1 classname=" m-5 p-5 text-center">Welcome to admin..!!!</h1>
  </div>
 </section>
 </div>
  </div>



  )
}

export default Dashboard