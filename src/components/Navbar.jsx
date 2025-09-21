import React from "react";

const Navbar = () => {
  return (
    <header className="cs_site_header cs_style1 cs_sticky_header cs_white_color">
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <a className="cs_site_branding" href="index.html">
                <img src="assets/img/logo_white.svg" alt="Logo" />
              </a>
              <nav className="cs_nav">
                <ul className="cs_nav_list">
                  <li className="">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="doctors.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">How it works</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="cs_main_header_right">
              <a href="appointments.html" className="cs_btn cs_style_1">
                <span>Book Now</span>
                <i>
                  <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                  <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
