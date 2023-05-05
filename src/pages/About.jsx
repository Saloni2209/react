import React from "react";

function About() {
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
            About Us
          </h1>
        </div>
        {/* bg image end */}
        <div className="row d-flex container-fluid py-5">
          <div className="  col-md-6">
            <div className="h1 text-center" style={{ overflowY: "hidden" }}>
              We Are Committed To Provide Safe Ride Solutions
            </div>
            <br />
            <p className="text-center">
              Sp car Rental is the top Car Rental Service Provider in Ahmedabad,
              Gujarat. Our team of Expert Drivers, Who are qualified and trained
              in all aspects of the profession, is committed to high standards
              of customer care. We are The Best Taxi Service in Ahmedabad,
              Gujarat because our customer service is second to none.
            </p>
            <p className="text-center">
              Our mission is to provide professional and reliable Cab Service In
              Ahmedabad.
            </p>
          </div>
          <div className=" col-md-6">
            <img src="image/about city.jpg" alt />
          </div>
        </div>
        {/* about us */}
        <div className="row">
          <div
            className="col-md-12"
            style={{ backgroundColor: "rgb(240, 240, 240)" }}
          >
            <div className="col-md-12">
              <div className="offset-4 col-4 text-center">
                <button
                  className="btn btn-light my-3"
                  type="button"
                  style={{ textAlign: "center" }}
                >
                  About
                </button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="offset-4 col-4">
                <h1
                  className="text-dark"
                  style={{ overflowY: "hidden", textAlign: "center" }}
                >
                  Welcome to <br />
                  Gujarat Car Rental
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-12"
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
          <div className="offset-2 col-8 ">
            <p className="text-dark">
              SP CAR RENTAL – is Ahmedabad based Rent-A-Cab service
              Provider Company. The company has begun the service in the year
              2015. Since then its mission is to provide the world class car
              rental service across Gujarat with the best quality at such a
              competitive price. We are working with professionalism,
              productivity, pleasure and punctuality. We provide the service in
              many major cities of Gujarat like Ahmedabad, Rajkot, Jamnagar,
              Dwarka, Porbandar, Somnath, Diu, Baroda, Bhuj etc. We provide the
              service for Airport / Hotel transfer, Local city tour and also for
              Outstation. We provide all types of vehicles like Sedan cars /
              SUVs / Luxurious cars / Tempo Traveler / Bus etc… Many Tourists,
              Corporate Companies, Colleges, Institutions, Exhibitors, are using
              our service regularly and are satisfied &amp; impressed with the
              Quality of our service. We look forward to providing the same to
              you in near future.
            </p>
          </div>
          <br />
          <img
            src="image/about car.png"
            className="img-fluid offset-2"
            alt="Responsive image"
          />
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="offset-4 col-4 text-center">
              <h4
                className=" my-3"
                style={{ color: "#2E375F", overflowY: "hidden" }}
              >
                our
              </h4>
            </div>
          </div>
          <div className="col-md-12">
            <div className="offset-4 col-4">
              <h1
                className="text-dark"
                style={{ overflowY: "hidden", textAlign: "center" }}
              >
                Safe, Reliable, Quick Taxi <br /> Rental Ahmedabad
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="offset-2 col-8 ">
            <p className="text-dark">
              We understand the importance of your time and safety when you
              travel with us. That's why our cab service in Ahmedabad is second
              to none. Our cabs are clean, comfortable, and well-maintained. Our
              drivers are well aware of the city, so you can rest assured that
              you'll get to your destination safely and on time. In addition,
              our unparalleled customer service makes us the best taxi service
              company in Ahmedabad.
            </p>
          </div>
        </div>
        {/* about us end */}
        <div className="row">
          <div className="col-md-12">
            <h1 className=" text-center py-5" style={{ color: "#2E375F" }}>
              Why to Choose Us!
            </h1>
          </div>
        </div>
        <div className="container card-group ">
          <div className="card ">
            <i className="fa-regular fa-4x fa-money-bill-1 text-center py-4" />
            <h2 className="text-center overflow-hidden py-3 ">
              Affordable Rates
            </h2>
            <p className="text-center">
              Best reasonable price with excellent service in industry.
            </p>
          </div>
          <div className="card">
            <i className="fa-regular fa-4x fa-clock text-center py-4" />
            <h2 className="text-center overflow-hidden py-3 ">
              Punctual in Time
            </h2>
            <p className="text-center">
              On time safely pickup &amp; drop service for your time.
            </p>
          </div>
          <div className="card">
            <i className="fa-regular fa-4x fa-user text-center py-4" />
            <h2 className="text-center overflow-hidden py-3 ">
              Experienced Drivers
            </h2>
            <p className="text-center">
              All drivers are licensed and verified for the quality drive.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center py-4 ">
              We’re 24×7 available to Book Your Cab with us.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
