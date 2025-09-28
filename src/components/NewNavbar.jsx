"use client";
import React, { useState } from "react";
import PilotFormModal from "./PilotFormModal";

const NewNavbar = () => {
  const [showPilotForm, setShowPilotForm] = useState(false);

  const handlePilotSubmit = async (form) => {
    // Replace with your API endpoint
    // await fetch('/api/pilot-interest', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    console.log("Pilot form submitted:", form);
  };
  return (
    <>
      <header className="cs_site_header cs_style1 cs_color_2 cs_sticky_header cs_heading_color">
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left lg:w-[70%] w-[50%]   ">
                <a className="cs_site_branding lg:w-[26%] w-[100%] " href="#">
                  <img
                    className="w-[100%]"
                    src="/52-removebg-preview.png"
                    alt="Logo"
                  />
                </a>
                <nav className="cs_nav">
                  <ul className="cs_nav_list">
                    <li className="">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#features">Key Features</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <button
                  onClick={() => setShowPilotForm(true)}
                  className="cs_btn cs_style_1">
                  <span>Request Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <PilotFormModal
        open={showPilotForm}
        onClose={() => setShowPilotForm(false)}
        onSubmit={handlePilotSubmit}
      />
    </>
  );
};

export default NewNavbar;
