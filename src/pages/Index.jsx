import React from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'

function Index() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };
  const navigateToAvailable_cars = () => {
    navigate('/available_cars');
  };
  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
  {/* Background image */}
  <div className="bg-image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("image/car.jpg")', height: '90vh'}}>
    <h1 className="text-white shadow-lg" style={{overflowY: 'hidden', textShadow: '2px 4px 4px rgba(0, 0, 0, 1)'}}>Rent a Car At lowest price...</h1>
  </div>
  <br />
  {/* Background image */}
  {/* about us */}
  <div className="row">
    <div className="col-md-12" style={{backgroundColor: 'rgb(240, 240, 240)'}} >
      <div className="col-md-12">
        <div className="offset-4 col-4 text-center">
          <button className="btn btn-light my-3" type="button" style={{textAlign: 'center'}}>About</button>
        </div>
      </div>
      <div className="col-md-12">
        <div className="offset-4 col-4">
          <h1 className="text-dark" style={{overflowY: 'hidden', textAlign: 'center'}}>Welcome to <br />SP Car Rental</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-12" style={{backgroundColor: 'rgb(240, 240, 240)'}} >
    <div className="offset-2 col-8 ">
      <p className="text-dark">
        SP CAR RENTAL – is Ahmedabad based Rent-A-Cab service Provider
        Company. The company has begun the service in the year 2015. Since
        then its mission is to provide the world class car rental service
        across Gujarat with the best quality at such a competitive price. We
        are working with professionalism, productivity, pleasure and
        punctuality. We provide the service in many major cities of Gujarat
        like Ahmedabad, Rajkot, Jamnagar, Dwarka, Porbandar, Somnath, Diu,
        Baroda, Bhuj etc. We provide the service for Airport / Hotel transfer,
        Local city tour and also for Outstation. We provide all types of
        vehicles like Sedan cars / SUVs / Luxurious cars / Tempo Traveler /
        Bus etc… Many Tourists, Corporate Companies, Colleges, Institutions,
        Exhibitors, are using our service regularly and are satisfied &amp;
        impressed with the Quality of our service. We look forward to
        providing the same to you in near future.
      </p>
    </div>
    <br />
    <img src="image/about car.png" className="img-fluid offset-2" alt="Responsive image" />
  </div>
  {/* about us end */}
  <div className="row">
    <div className="col-md-12">
      <h1 className=" text-center py-5" style={{color: '#2E375F'}}>Why to Choose Us!</h1>
    </div>
  </div>
  <div className="container card-group ">
    <div className="card ">
      <i className="fa-regular fa-4x fa-money-bill-1 text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Affordable Rates</h2>
      <p className="text-center">Best reasonable price with excellent service in industry.</p>
    </div>
    <div className="card">
      <i className="fa-regular fa-4x fa-clock text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Punctual in Time</h2>
      <p className="text-center">On time safely pickup &amp; drop service for your time.</p>
    </div>
    <div className="card">
      <i className="fa-regular fa-4x fa-user text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Experienced Drivers</h2>
      <p className="text-center">All drivers are licensed and verified for the quality drive.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <h2 className="text-center py-4 ">We’re 24×7 available to Book Your Cab with us.</h2>
    </div>
  </div>
  <div className="row d-flex container-fluid py-5">
    <div className=" col-md-6">
      <img src="image/car-rental-service-in-ahmedabad.png" alt />
    </div>
    <div className="  col-md-6">
      <div className="h1" style={{overflowY: 'hidden'}}>Car Hire In Ahmedabad</div>
      <br />
      <p>We provide door-to-door pickup and drop-off service for our customers' convenience. In addition, we offer a wide range of taxi rental services to meet your individual needs and budget. So, our professional driver team will ensure an enjoyable journey if you're looking for a comfortable ride to the airport or a sightseeing tour of the city.</p>
      <br />
      <p>We offer outstation car rental services from Ahmedabad. So, whether you're going on a business trip or a family vacation, we'll ensure you have the right vehicle.</p>
      <br />
      <p>Our taxi rental service is available 24 hours a day, 7 days a week. If you want to share your experience with us, drop your feedback by email at saitravelsahmedabad.com or contact us today at 9714439889 to learn more about our taxi hire in Ahmedabad services or to book your next ride.</p>
      <br />
      <button className="btn text-light" onClick={navigateToAbout} style={{backgroundColor: '#2E375F'}}>Read More</button>
    </div>
  </div>
  {/* car rental start */}
  <div className="row">
    <div className="col-md-12">
      <h1 className=" text-center py-5" style={{color: '#2E375F'}}>Available Cars</h1>
    </div>
  </div>
  <div className=" container card-group  ">
    <div className="card">
      <div className="card-body text-center">
        <img src="image/toyota-etios.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Toyota Etios</h2>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
      </div>
    </div>
    <div className="card">
      <div className="card-body text-center">
        <img src="image/swift-dzire.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Swift Dzire</h2>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
      </div>
    </div> <div className="card">
      <div className="card-body text-center">
        <img src="image/xcent.png" className="card-img-top" alt="..." />
        <h2 className="card-text py-2 ">Xcent</h2>
        <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
        <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
      </div>
    </div>
    <div className=" container card-group py-5 ">
      <div className="card">
        <div className="card-body text-center">
          <img src="image/honda-amaze.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Honda Amaze</h2>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
          <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <img src="image/innova.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Toyota Innova</h2>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
          <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
        </div>
      </div> <div className="card">
        <div className="card-body text-center">
          <img src="image/innova-criysta.png" className="card-img-top" alt="..." />
          <h2 className="card-text py-2 ">Innova Crysta</h2>
          <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
          <button className="btn text-light" oonClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
        </div>
      </div>
      <div className=" container card-group py-5 ">
        <div className="card">
          <div className="card-body text-center">
            <img src="image/mahindra-marazzo.png" className="card-img-top" alt="..." />
            <h2 className="card-text py-2 ">Mahindra Marazzo</h2>
            <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
            <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <img src="image/ertiga.png" className="card-img-top" alt="..." />
            <h2 className="card-text py-2 ">Ertiga</h2>
            <button className="btn " style={{backgroundColor: '#2E375F'}}><NavLink to="tel:+91-7622832310" className="text-light text-decoration-none">Call Now</NavLink></button>
            <button className="btn text-light" onClick={navigateToAvailable_cars} style={{backgroundColor: '#2E375F'}}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <h2 className="text-center py-3 ">Our Services For you!</h2>
      <p className="text-center">
        To provide you best in class experience we have this much services keeping your safety and security in the center of our thoughts.</p>
    </div>
  </div>
  <div className="container card-group ">
    <div className="card ">
      <i className="fa-solid fa-4x fa-car text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">24/7 Available</h2>
      <p className="text-center py-2">We are 24/7 available for your travel need which ensures you safe drive.</p>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-map-location-dot text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Live Tracking</h2>
      <p className="text-center py-2">We provides real time location sharing for your safety &amp; security.</p>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-user-tie text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Expert Drivers</h2>
      <p className="text-center py-2">Our all drivers are experienced and licensed which helps you in smooth ride.</p>
    </div>
  </div>
  <div className="container card-group py-5 ">
    <div className="card ">
      <i className="fa-regular fa-4x fa-money-bill-1 text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Corporate Rental
      </h2>
      <p className="text-center py-2">We are 24/7 available for your travel need which ensures you safe drive.</p>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-plane-departure text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Airport Pickup</h2>
      <p className="text-center py-2">We provides real time location sharing for your safety &amp; security.</p>
    </div>
    <div className="card">
      <i className="fa-solid fa-4x fa-car text-center py-4" />
      <h2 className="text-center overflow-hidden py-3 ">Outstation Services</h2>
      <p className="text-center py-2">Our all drivers are experienced and licensed which helps you in smooth ride.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 text-center py-3">
      <button className="btn text-light " onClick={navigateToContact} style={{backgroundColor: '#2E375F'}}>BOOK NOW</button>
    </div>
  </div>
</div>

  )
}

export default Index