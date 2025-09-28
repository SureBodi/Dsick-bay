import React from "react";

const ServicesContent = () => {
  return (
    <section id="services">
      <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110" />
      <div className="container">
        <div className="row ">
          <div className="col-md-12 col-xl-12">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_subtitle text-uppercase text-center cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
                SERVICES
              </h3>
              <div className="cs_height_5" />
              <h2 className="cs_section_title text-center cs_fs_72 m-0">
                Services Provided by Dsick bay
              </h2>
            </div>
            <div className="cs_height_70 cs_height_lg_50" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">
                Instant symptom checks and fast triage.
              </h2>
              {/* <p className="cs_iconbox_subtitle m-0">
                Blood tests, imaging studies, and other tests to diagnose health
                conditions
              </p>
              <a href="#" className="cs_iconbox_btn cs_center">
                <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
              </a> */}
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">
                On-demand online consultations with a certified doctor.
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">
                Confidential mental health screening and therapy sessions.
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">
                Home and office lab sample pickup.
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">
                Coordinated laboratory tests and clinical review.
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="cs_iconbox cs_style_4">
              <div className="cs_iconbox_icon cs_accent_bg rounded-circle cs_center">
                <img src="assets/img/icons/calendar_white.svg" alt="Icon" />
              </div>
              <h2 className="cs_iconbox_title cs_fs_32">Fit-to-work notes.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;
