import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
       {/* Footer */}
    <footer className="text-center text-lg-start text-white" style={{backgroundColor: '#2E375F'}}>
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section className>
          {/*Grid row*/}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-decoration-underline overflow-hidden">
                SP CAR RENTAL
              </h6>
              <p>
                We would love to make you one of our happy customer at SP CAR RENTAL.
              </p>
              <p>Contact Us now to discuss your Trip.</p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold overflow-hidden">
                Useful links
              </h6>
              <p>
                <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
              </p>
              <p>
                <NavLink className="text-white text-decoration-none" to="/about">About</NavLink>
              </p>
              <p>
                <NavLink className="text-white text-decoration-none" to="/Services">Services</NavLink>
              </p>
              <p>
                <NavLink className="text-white text-decoration-none" to="/Available_cars">Available cars</NavLink>
              </p>
              <p>
                <NavLink className="text-white text-decoration-none" to="/contact">Contact us</NavLink>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-decoration-underline overflow-hidden">HEAD OFFICE</h6>
              <p><i className="fas fa-home mr-3" /> 71,Satsang Park,Madhav School Road,Vastral,Ahmedabad.</p>
              <p><i className="fas fa-envelope mr-3" /> <NavLink to="mailto:salonipatel2209@gmail.com" className="text-decoration-none text-light">Salonipatel2209@gmail.com</NavLink></p>
              <p><i className="fas fa-phone mr-3" /> <NavLink to="tel:+91-7622832310" className="text-decoration-none text-light">+91 7622832310</NavLink></p>
            </div>
            {/* Grid column */}
          </div>
          {/*Grid row*/}
        </section>
        {/* Section: Links */}
        <hr className="my-3" />
        {/* Section: Copyright */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* Copyright */}
              <div className="p-3">
                © 2020 Copyright : SP CAR RENTAL
              </div>
              {/* Copyright */}
            </div>
          </div>
        </section>
        {/* Section: Copyright */}
      </div>
      {/* Grid container */}
    </footer>
    {/* Footer */}
    </div>
  )
}

export default Footer

