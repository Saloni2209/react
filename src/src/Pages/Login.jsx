import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const  redirect=useNavigate();

  useEffect(()=>{
if(localStorage.getItem('id'))
{
  return redirect('/login');
}
  },[]);

  const[formvalue , setFormvalue] = useState ({
    email:'',
    password:'',
  })
  
  const onchange = (s)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(), [s.target.name]:s.target.value});
      }

const validation=()=>{
  let result= true;

  if(formvalue.email==="" || formvalue.email==null)
  {
    result=false;
    alert('email feild is required');
  }
  
  if(formvalue.password==="" || formvalue.password==null)
  {
    result=false;
    alert("password feild is required");
  }
  return result;
}

      const onsubmit = async (s) => {
        s.preventDefault();
        if(validation())
        {
        const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
        if(res.data.length>0)
        {
          if(res.data[0].password===formvalue.password)
          {
            localStorage.setItem('id',res.data[0].id);
            localStorage.setItem('name',res.data[0].name);

            alert("login successful");
            return redirect('/dashboard');
          }
          else
          {
            alert("Enter valid password");
            return redirect('/login');
          }
        }
        else
        {
alert("enter valid email");
return redirect('/login');
        }
        }
      };
      
  return (
    <>
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
          <NavLink className="list-group-item list-group-item-action list-group-item-light text-light p-5" style={{backgroundColor: '#223366',height:'36vh'}} to="/"></NavLink>
        
        </div>
      </div>
    </div>
      <section
        style={{ backgroundImage: "url('img/bg.jpg')", height: "100vh",width:"100%"}}
      >
        <h1 className=" text-center text-dark py-3">Login Form</h1>

        <form
          className="container border w-25  text-light"
          style={{ backgroundColor: "#003366" }}
        >
          <div className="mb-3 py-3">
            <label htmlFor="exampleInputEmail " className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={onchange}
              value={formvalue.email}
              className="form-control"
              id="exampleInputEmail"
              required
            />
          </div>
          <div className="mb-3 py-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={onchange}
              value={formvalue.password}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" onClick ={onsubmit} className="btn btn-light text-center mb-4">
            login
          </button>
          <h6 className="text-light pb-3">
            Not a member?{" "}
            <NavLink
              className="link  text-light"
              style={{ color: "#223366" }}
              to="/signup"
            >
              Create Account
            </NavLink>
          </h6>
        </form>
      </section>
      </section>
      </div>
    </>
  );
}

export default Login;
