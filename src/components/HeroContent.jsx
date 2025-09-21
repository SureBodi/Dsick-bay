import React from "react";

const HeroContent = () => {
  return (
    <section
      className="cs_hero cs_style_2 cs_bg_filed cs_ripple_activate"
      data-src="/assets/img/home_2/hero_bg.jpg"
      style={{
        backgroundImage: "url(/assets/img/home_2/hero_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_84">
            Compassionate care, exceptional results.
          </h1>
          <div className="cs_hero_text_in">
            <div className="cs_hero_btn cs_white_color">
              <a href="#" className="cs_text_btn">
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
        <img
          src="/assets/img/home_2/patents.png"
          alt="Hero"
          className="cs_hero_patents"
        />
      </div>
      <div className="container">
        <div className="cs_hero_bottom">
          <div className="cs_hero_bottom_left">
            <div className="cs_hero_btn_wrap">
              <a
                href="https://www.youtube.com/embed/VcaAVWtP48A"
                className="cs_video_open cs_white_color cs_text_btn_2 cs_fs_20">
                <span className="cs_text_btn_icon">
                  <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M42.739 7.26089C32.8938 -2.48797 17.0097 -2.40994 7.26088 7.43526C-2.42029 17.2121 -2.42029 32.9623 7.26088 42.7392C17.1061 52.488 32.9902 52.41 42.739 42.5648C52.4202 32.788 52.4202 17.0377 42.739 7.26089ZM25 48.0713C12.2783 48.0713 1.92868 37.7217 1.92868 25C1.92868 12.2782 12.2782 1.9288 25 1.9288C37.7217 1.9288 48.0712 12.2784 48.0712 25.0001C48.0712 37.7218 37.7216 48.0713 25 48.0713Z"
                      fill="currentColor"
                    />
                    <path
                      d="M38.5996 24.1265V24.1277L18.2308 12.368C17.7487 12.0897 17.1322 12.2548 16.8539 12.737C16.7655 12.8901 16.7189 13.0637 16.7189 13.2405V36.7598C16.7191 37.3164 17.1707 37.7676 17.7273 37.7672C17.9041 37.7671 18.0778 37.7206 18.2309 37.6322L38.5997 25.8725C39.0819 25.5943 39.2471 24.9778 38.9689 24.4956C38.8803 24.3423 38.753 24.215 38.5996 24.1265Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="cs_text_btn_text">See how we work</span>
              </a>
            </div>
          </div>
          <div className="cs_hero_bottom_right">
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

export default HeroContent;
