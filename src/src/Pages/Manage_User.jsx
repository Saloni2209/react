import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react"
import axios from 'axios';

function Manage_Contact() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchdata();
    }, []);

    const fetchdata = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        setData(res.data);
        setLoading(true);
      };

      const ondelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        alert("User Data Delete Success");
        fetchdata();
      };
    
      const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password:"",
      });

  return (
    <>
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
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#0077b6'}} to="/dashboard">Dashboard</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light  p-3" style={{backgroundColor: '#223366'}} to="/manage_user">Manage_User</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#0077b6'}} to="/manage_contact">Manage_Contact</NavLink>
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-3" style={{backgroundColor: '#223366'}} to="/"></NavLink>
        </div>
      </div>
    </div>
 
    <table className="table ">
  <thead>
    <tr>
    
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {data.map((item, index, entarr) => {
                          return (
                            <tr className="odd gradeX">
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.password}</td>
                              {/* <td>{item.message}</td> */}
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => ondelete(item.id)}
                                >
                                  Delete
                                </button>

                              </td>
                            </tr>
                          );
                        })}
  </tbody>
</table>
</section>
</div>
    </>
  )
}

export default Manage_Contact