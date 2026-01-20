import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_1" />
      <div className="cs_height_175 cs_height_xl_125 cs_height_lg_85" />
      <div className="container">
        <div className="row flex-xl-row flex-column-reverse">
          <div className="col-xl-5">
            <div className="cs_pr_95 text-center cs_img_filed">
              <img
                // src="assets/img/about/why_choose_us.jpg"
                src="/assets/img/why_choose_dsickbay.jpg"
                alt="Why Choose Us"
                className=" cs_radius_30"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cs_section_heading cs_style_1">
              <h2 className="cs_section_title cs_fs_72 m-0">
                Why Employers Choose Dsick bay
              </h2>
            </div>
            <div className="cs_height_85 cs_height_xl_70 cs_height_lg_50" />
            <div className="row">
              <div className="col-md-6">
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle">
                    <img src="assets/img/icons/professional.svg" alt="Icon" />
                  </div>
                  <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                    Lower absenteeism
                  </h2>
                  <p className="cs_iconbox_subtitle m-0">
                    Faster triage and early care reduces full-day work absences.
                  </p>
                </div>
                <div className="cs_height_85 cs_height_xl_60 cs_height_lg_35" />
              </div>
              <div className="col-md-6">
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle">
                    <img src="assets/img/icons/comprehensive.svg" alt="Icon" />
                  </div>
                  <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                    Better productivity
                  </h2>
                  <p className="cs_iconbox_subtitle m-0">
                    Quick access to care addresses minor issues before they
                    escalate, helping staff stay healthy and productive.
                  </p>
                </div>
                <div className="cs_height_85 cs_height_xl_60 cs_height_lg_35" />
              </div>
              <div className="col-md-6">
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle">
                    <img src="assets/img/icons/patient.svg" alt="Icon" />
                  </div>
                  <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                    Actionable insights
                  </h2>
                  <p className="cs_iconbox_subtitle m-0">
                    Anonymized reports show health trends and early warnings,
                    giving employers the tools needed to promote preventive
                    health practices at work.
                  </p>
                </div>
                <div className="cs_height_85 cs_height_xl_60 cs_height_lg_35" />
              </div>
              <div className="col-md-6">
                <div className="cs_iconbox cs_style_6">
                  <div className="cs_iconbox_icon cs_center cs_accent_bg rounded-circle">
                    <img src="assets/img/icons/facilities.svg" alt="Icon" />
                  </div>
                  <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                    Easy integration
                  </h2>
                  <p className="cs_iconbox_subtitle m-0">
                    Very simple staff onboarding process. We coordinate lab/referral
                    per selected plan and company policy.
                  </p>
                </div>
                <div className="cs_height_85 cs_height_xl_60 cs_height_lg_35" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
