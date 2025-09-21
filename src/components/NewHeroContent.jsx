import React from "react";

const NewHeroContent = () => {
  return (
    <section className="cs_hero cs_style_2 cs_type_1">
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_84">
            Take Best Treatment with Our
            <span className="cd-headline slide cs_accent_color">
              <span className="cd-words-wrapper">
                <b className="is-visible">Dentist</b>
                <b>Crutches</b>
                <b>Laboratory</b>
                <b>Cardiology</b>
                <b>Neurology</b>
              </span>
            </span>
          </h1>
          <div className="cs_hero_text_in">
            <div className="cs_hero_btn cs_white_color">
              <a href="about.html" className="cs_text_btn">
                Pro Health
              </a>
            </div>
            <p className="cs_hero_subtitle cs_white_color">
              Our team of experienced doctors and healthcare professionals are
              committed to providing quality care and personalized attention to
              our patients.
            </p>
          </div>
        </div>
      </div>
      <div className="cs_hero_img">
        <img src="assets/img/home_5/hero_img.png" alt="Hero" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_hero_funfact text-center">
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={20} />+
                </h3>
                <p className="cs_white_color mb-0">Years of experience</p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={95} />%
                </h3>
                <p className="cs_white_color mb-0">
                  Patient satisfaction rating
                </p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={5000} />+
                </h3>
                <p className="cs_white_color mb-0">Patients served annually</p>
              </div>
              <div className="cs_hero_funfact_col">
                <h3 className="cs_white_color cs_fs_72">
                  <span className="odometer" data-count-to={10} />+
                </h3>
                <p className="cs_white_color mb-0">
                  Healthcare providers on staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroContent;
