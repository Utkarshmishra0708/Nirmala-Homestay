import React from "react";
import ReactDom from "react-dom/client";

// React Element

/**
 * Header
 *  - Logo
 *  - title
 *  - subtitle
 *  - Nav Items
 * Body
 *  - image
 *  - Service Container
 *    - service img
 *      - image
 *      - Name of service
 *    - service details
 *      - details
 *  - Destinations
 *    - NH logo
 *    - Destinations logos
 *    - distances in km
 *  - Book Your stay
 *    - Booking Container
 *      - image
 *      - details
 *  - About Us
 *    - details about us
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact Info
 */

const Header = () => {
  const logo = new URL("/public/assets/images/nh.png", import.meta.url);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="name">
        <h1 className="title">NIRMALA HOMESTAY</h1>
        <h2 className="subtitle">A Home Away From Home</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a
              className="locate"
              href="https://maps.app.goo.gl/9kBecW1KSys3DPZ3A"
              target="_blank"
            >
              Locate Us
            </a>
          </li>
          <li>Destinations</li>
        </ul>
      </div>
    </div>
  );
};

const Service = () => {
    const mainPhoto = new URL("/public/assets/images/room.jpeg", import.meta.url);
  return <div className="service">
    <h1>Homestays -{">"}</h1>
    <img className="service-logo" src={mainPhoto} alt="" />
    <h3>2BHK Flat</h3>
    <h4>₹2500 for 1 night</h4>
    <h4>4.8 stars</h4>
  </div>;
};

const Body = () => {
  const mainPhoto = new URL("/public/assets/images/room.jpeg", import.meta.url);
  return (
    <div className="body">
      {/* <div className="main-image">
        <img className="room" src={mainPhoto} alt="" />
      </div> */}
      <div className="service-container">
        <Service />
      </div>
    </div>
  );
};

const Footer = () => {
  const logo = new URL("/public/assets/images/nh.png", import.meta.url);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="name">
        <h1 className="title">NIRMALA HOMESTAY</h1>
        <h2 className="subtitle">A Home Away From Home</h2>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <a
              className="locate"
              href="https://maps.app.goo.gl/9kBecW1KSys3DPZ3A"
              target="_blank"
            >
              Locate Us
            </a>
          </li>
          <li>Destinations</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
