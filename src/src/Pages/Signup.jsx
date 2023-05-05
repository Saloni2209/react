import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onchange = (s) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [s.target.name]: s.target.value,
    });
  };

  const onsubmit = async (s) => {
    s.preventDefault();
    const res = await axios.post(`http://localhost:3000/admin`, formvalue);
    setFormvalue({
      ...formvalue,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    alert("SignUp Success");
  };


  return (
    <section style={{ backgroundImage: "url('img/bg.jpg')", height: "100vh" }}>
      <h1 className=" text-center text-dark py-3">Create Account</h1>

      <form
        className="container border w-25  text-light"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="mb-3 py-3">
          <label htmlFor="exampleInputName " className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formvalue.name}
            onChange={onchange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 py-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formvalue.email}
            onChange={onchange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3 py-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formvalue.password}
            onChange={onchange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 py-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confiorm Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            value={formvalue.confirmpassword}
            onChange={onchange}
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
        <button
          type="submit"
          onClick={onsubmit}
          className="btn btn-light my-2 "
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Signup;
