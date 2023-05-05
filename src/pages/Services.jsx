import React from 'react'

function Services() {
  return (
    <div>
        <div>
  {/* bg image start */}
  <div className="bg-image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("image/blurr.jpg")', height: '30vh'}}>
    <h1 className="text-white shadow-lg" style={{overflowY: 'hidden', textShadow: '2px 4px 4px rgba(0, 0, 0, 1)'}}>SERVICES..!!</h1>
  </div>
  {/* bg image end */}
  <div className="container card-group pb-5 py-5">
    <div className="card ">
      <i className="fa-solid fa-4x fa-map-location-dot text-center py-4" />
      <h3 className="text-center overflow-hidden py-3 ">Airport Pickup &amp; Drop Service Providers.</h3>
      <p className="text-center">Sai Travels offers a hassle-free Airport taxi service to ensure that you reach on time. We are also available for airport pick-up and drop cab services, so you don't have to worry about the last-minute rush. </p>
      <div className="btn"> <button className="btn text-light" style={{backgroundColor: '#2E375F'}}>Call Now</button>
      </div>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-car-side text-center py-4" />
      <h3 className="text-center overflow-hidden py-3 ">Car Rental Services From Ahmedabad To Nearby Destinations </h3>
      <p className="text-center">If you require a car rental but don't want to spend hours searching, give us a call at Sai Travels and we'll help you find the perfect rental for you. We provide customers with reliable and premium Intercity "Outstation" and Local Car Rental Services in Ahmedabad.
      </p>
      <div className="btn"> <button className="btn text-light" style={{backgroundColor: '#2E375F'}}>Call Now</button>
      </div>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-taxi text-center py-4" />
      <h3 className="text-center overflow-hidden py-3 ">Outstation Cabs Ahmedabad</h3>
      <p className="text-center"> Outstation Destinations from Ahmedabad provides Taxi service in Ahmedabad for outstation, Gujarat. Our customers book outstation taxi services in Ahmedabad for trips to most multicity cab booking in Ahmedabad. The AC cabs are most probably comfortable for the travel the long routes.</p>
      <div className="btn"> <button className="btn text-light" style={{backgroundColor: '#2E375F'}}>Call Now</button>
      </div>
    </div>
  </div>
  <div className="container card-group pb-5">
    <div className="card ">
      <i className="fa-solid fa-4x fa-users text-center py-4" />
      <h3 className="text-center overflow-hidden py-3 ">Top Rated Driver-Partners</h3>
      <p className="text-center">All our driver-partners are background verified and trained to deliver only the best experience</p>
      <div className="btn"> <button className="btn text-light" style={{backgroundColor: '#2E375F'}}>Call Now</button>
      </div>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-user-tie text-center py-4" />
      <h3 className="text-center overflow-hidden py-3 ">24/7 Customer Support</h3>
      <p className="text-center">A dedicated 24x7 customer support team always at your service to help solve any problem</p>
      <div className="btn"> <button className="btn text-light" style={{backgroundColor: '#2E375F'}}>Call Now</button>
      </div>   
    </div>
  </div>
</div>

    </div>
  )
}

export default Services