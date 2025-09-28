"use client";
import React, { useState } from "react";
import PilotFormModal from "@/components/PilotFormModal";
import PilotDocModal from "@/components/PilotDocModal";

export default function NewHeroContent() {
  const [showPilotForm, setShowPilotForm] = useState(false);
  const [showPilotDoc, setShowPilotDoc] = useState(false);

  // Your Google Doc preview URL
  const pilotDocUrl =
    "https://docs.google.com/document/d/17jUyuO4K97tMAc9TDSBWdZbfyKNfozNaEPqklZnEu4Q/preview";

  const handlePilotSubmit = async (form) => {
    // Replace with your API endpoint
    // await fetch('/api/pilot-interest', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
    console.log("Pilot form submitted:", form);
  };

  return (
    <section className="cs_hero cs_style_2 cs_type_1">
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title  cs_white_color cs_fs_84">
            Fewer Sick Days Happier & Productive Teams
          </h1>

          <div className="cs_hero_text_in">
            <p className="cs_hero_subtitle cs_white_color">
              Improve your staff morale and wellbeing with our all in one
              digital workplace health solution providing instant, confidential
              medical care.
            </p>
          </div>

          <div className="d-flex gap-3 my-[1rem] ">
            <button
              style={{
                borderRadius: "20px",
                padding: "5px 15px",
                color: "#9176e2",
                fontWeight: 900,
              }}
              className=" bg-[#fff]"
              onClick={() => setShowPilotForm(true)}>
              Start 30 Day Pilot
            </button>

            <a
              style={{
                borderRadius: "20px",
                padding: "5px 15px",
                color: "#9176e2",
                fontWeight: 900,
              }}
              className=" bg-[#fff]"
              // onClick={() => setShowPilotDoc(true)}
              href="#pricing">
              Enrol employees
            </a>
          </div>
        </div>
      </div>

      <div className="cs_hero_img">
        <img
          src="/assets/img/staff-img-2-removebg-preview.png"
          className="h-image"
          alt="Hero"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_hero_funfact text-center">
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={50} />%
                </h3>
                <p className="cs_white_color mb-0">
                  Reduction in sick absences
                </p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={90} />%
                </h3>
                <p className="cs_white_color mb-0">Staff satisfaction rating</p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={50} />+
                </h3>
                <p className="cs_white_color mb-0">
                  Affiliated health facilities
                </p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={233} />%
                </h3>
                <p className="cs_white_color mb-0">
                  ROI from improved productivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PilotFormModal
        open={showPilotForm}
        onClose={() => setShowPilotForm(false)}
        onSubmit={handlePilotSubmit}
      />
      <PilotDocModal
        open={showPilotDoc}
        onClose={() => setShowPilotDoc(false)}
        docUrl={pilotDocUrl}
      />
    </section>
  );
}
