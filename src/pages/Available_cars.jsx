import React from 'react'
import { NavLink } from 'react-router-dom'

function Available_cars() {
  return (
    <div>
        
  {/* bg image start */}
  <div className="bg-image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("image/blurr.jpg")', height: '30vh'}}>
    <h1 className="text-white shadow-lg" style={{overflowY: 'hidden', textShadow: '2px 4px 4px rgba(0, 0, 0, 1)'}}>Available Cars..!!</h1>
  </div>
  {/* bg image end */}
  <div className=" container card-group  ">
    <div className="card">
      <div className="card-body text-center">
        <img src="image/toyota-etios.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Toyota Etios</h2>
        <p>Per Day : 300kms per vehicle</p>
        <p>suitable for 4+1 comfortable seating</p>
        <p>Driver charge (300 Rs)</p>
        <p>Toll Tax and Parking Charge Extra</p>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
      </div>
    </div>
    <div className="card">
      <div className="card-body text-center">
        <img src="image/swift-dzire.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Swift Dzire</h2>
        <p>Per Day : 300kms per vehicle</p>
        <p>suitable for 4+1 comfortable seating</p>
        <p>Driver charge (300 Rs)</p>
        <p>Toll Tax and Parking Charge Extra</p>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
      </div>
    </div> <div className="card">
      <div className="card-body text-center">
        <img src="image/xcent.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Xcent</h2>
        <p>Per Day : 300kms per vehicle</p>
        <p>suitable for 4+1 comfortable seating</p>
        <p>Driver charge (300 Rs)</p>
        <p>Toll Tax and Parking Charge Extra</p>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
      </div>
    </div>
    <div className=" container card-group py-5 ">
      <div className="card">
        <div className="card-body text-center">
          <img src="image/honda-amaze.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Honda Amaze</h2>
          <p>Per Day : 300kms per vehicle</p>
          <p>suitable for 4+1 comfortable seating</p>
          <p>Driver charge (300 Rs)</p>
          <p>Toll Tax and Parking Charge Extra</p>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <img src="image/innova.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Toyota Innova</h2>
          <p>Per Day : 300kms per vehicle</p>
          <p>suitable for 6+1 comfortable seating</p>
          <p>Driver charge (300 Rs)</p>
          <p>Toll Tax and Parking Charge Extra</p>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        </div>
      </div> <div className="card">
        <div className="card-body text-center">
          <img src="image/innova-criysta.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Innova Crysta</h2>
          <p>Per Day : 300kms per vehicle</p>
          <p>suitable for 6+1 comfortable seating</p>
          <p>Driver charge (300 Rs)</p>
          <p>Toll Tax and Parking Charge Extra</p>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        </div>
      </div>
      <div className=" container card-group py-5 ">
        <div className="card">
          <div className="card-body text-center">
            <img src="image/mahindra-marazzo.png" className="card-img-top" alt="..." />
            <h2 className="card-text py-2 ">Mahindra Marazzo</h2>
            <p>Per Day : 300kms per vehicle</p>
            <p>suitable for 6+1 comfortable seating</p>
            <p>Driver charge (300 Rs)</p>
            <p>Toll Tax and Parking Charge Extra</p>
            <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <img src="image/ertiga.png" className="card-img-top" alt="..." />
            <h2 className="card-text py-2 ">Ertiga</h2>
            <p>Per Day : 300kms per vehicle</p>
            <p>suitable for 6+1 comfortable seating</p>
            <p>Driver charge (300 Rs)</p>
            <p>Toll Tax and Parking Charge Extra</p>
            <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Available_cars