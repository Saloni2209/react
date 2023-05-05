import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    location: "",
    phonenumber: "",
    message: "",
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
    const res = await axios.post(`http://localhost:3000/contact`, formvalue);
    setFormvalue({
      ...formvalue,
      name: "",
      email: "",
      location: "",
      phonenumber: "",
      message: "",
    });

    alert("message submited");
  };
  return (
    <div>
      <div>
        <div
          className="bg-image d-flex justify-content-center align-items-center"
          style={{ backgroundImage: 'url("image/blurr.jpg")', height: "30vh" }}
        >
          <h1
            className="text-white shadow-lg"
            style={{
              overflowY: "hidden",
              textShadow: "2px 4px 4px rgba(0, 0, 0, 1)",
            }}
          >
            CONTACT US..!!
          </h1>
        </div>
        {/* bg image end */}
        <div className="border">
          <form className="container py-5 ">
            <div className="form-group py-2">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formvalue.name}
                onChange={onchange}
                aria-describedby="emailHelp"
                placeholder="Enter Your name"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                value={formvalue.email}
                onChange={onchange}
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="Location">Location</label>
              <input
                type="text"
                className="form-control"
                value={formvalue.location}
                name="location"
                onChange={onchange}
                id="Location"
                aria-describedby="emailHelp"
                placeholder="Location"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                type="number"
                name="phonenumber"
                className="form-control"
                value={formvalue.phonenumber}
                onChange={onchange}
                id="PhoneNumber"
                placeholder="phone number"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="message">Message</label>
              <input
                type="text"
                className="form-control mb-3"
                value={formvalue.message}
                onChange={onchange}
                name="message"
                id="message"
                aria-describedby="emailHelp"
                placeholder="write here your message"
              />

              <button
                type="submit"
                className="btn text-light "
                onClick={onsubmit}
                style={{ backgroundColor: "#2E375F" }}
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="container card-group pb-5">
            <div className="card ">
              <i className="fa-solid fa-4x fa-home text-center py-4" />
              <h2 className="text-center overflow-hidden py-3 ">ADDRESS</h2>
              <p className="text-center">
                71,Satsang Park,Madhav School Road,Vastral,Ahmedabad.
              </p>
            </div>
            <div className="card">
              <i className="fa-solid fa-4x fa-phone text-center py-4" />
              <h2 className="text-center overflow-hidden py-3 ">CONTACT US</h2>
              <p className="text-center">Have doubts? Just contact us.</p>
              <p className="text-center">
                <NavLink
                  to="tel:+91-7622832310"
                  className="text-decoration-none"
                  style={{ color: "#2E375F" }}
                >
                  +91-7622832310
                </NavLink>
              </p>
            </div>
            <div className="card">
              <i className="fa-solid fa-4x fa-envelope text-center py-4" />
              <h2 className="text-center overflow-hidden py-3 ">MAIL US</h2>
              <p className="text-center">
                Be in touch with us by dropping mail.{" "}
              </p>
              <p className="text-center ">
                <NavLink
                  to="mailto:salonipatel2209@gmail.com"
                  className="text-decoration-none"
                  style={{ color: "#2E375F" }}
                >
                  salonipatel2209@gmail.com
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
