"use client";
import React, { useState } from "react";
import PlanSignupModal from "@/components/PlanSignupModal";

const PricePlanContents = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Helper to open modal with the chosen plan
  const startPlan = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleSubmit = async (payload) => {
    // Send to your API endpoint
    // await fetch('/api/plan-signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    console.log("Submitted:", payload);
  };

  return (
    <section id="pricing">
      <div className="cs_height_185 cs_height_xl_140 cs_height_lg_100" />
      <div className="container">
        <div className="row">
          <div className="cs_section_heading cs_style_1 text-center">
            <h2 className="cs_section_title cs_fs_72 capitalize m-0">
              A range of affordable subscription plans to choose from
            </h2>
          </div>
        </div>
        <br />
        <br />
        <div className="row cs_gap_y_50">
          {/* Pilot Offer */}
          <div className="col-xl-4">
            <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
              <div className="cs_pricing_card_head cs_accent_bg cs_white_color">
                <h3 className="cs_white_color cs_fs_24 cs_semibold">
                  <span className="cs_accent_bg">Pilot offer | 30 Days</span>
                </h3>
                <p>
                  Demonstrate impact on access to care, staff satisfaction, and
                  early signals on reduced absenteeism
                </p>
                <h2 className="cs_white_color mb-0 cs_fs_72 cs_semibold">
                  ₦1000<span className="cs_fs_24">/staff</span>
                </h2>
              </div>
              <div className="cs_pricing_card_body">
                <ul className="cs_pricing_card_feature cs_fs_20 cs_heading_color">
                  <li>
                    <i className="fa-solid fa-circle-check" /> One-off bills
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Mid & end of
                    pilot reports
                  </li>
                </ul>
                <div className="cs_pricing_card_btn">
                  <button
                    className="cs_btn cs_style_1 w-100"
                    onClick={() =>
                      startPlan({
                        key: "pilot",
                        title: "Pilot offer | 30 Days",
                        price: "₦1000",
                        per: "staff",
                        billing: "one-off",
                      })
                    }>
                    <span>Get Started</span>
                    <i>
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-xl-4">
            <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
              <div className="cs_pricing_card_head cs_accent_bg cs_white_color">
                <h3 className="cs_white_color cs_fs_24 cs_semibold">
                  <span className="cs_accent_bg">Standard Plan </span>
                  <span className="cs_heading_color cs_normal">Popular</span>
                </h3>
                <p>Comprehensive on-demand access to Dsick bay services</p>
                <h2 className="cs_white_color mb-0 cs_fs_72 cs_semibold">
                  ₦2500<span className="cs_fs_24">/staff</span>
                </h2>
              </div>
              <div className="cs_pricing_card_body">
                <ul className="cs_pricing_card_feature cs_fs_20 cs_heading_color">
                  <li>
                    <i className="fa-solid fa-circle-check" /> Monthly postpaid
                    bill
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> 5 - 10% discount
                    if 50+ staff
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> 20% Annual prepay
                    discount
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Monthly &
                    Quarterly KPIs
                  </li>
                </ul>
                <div className="cs_pricing_card_btn">
                  <button
                    className="cs_btn cs_style_1 w-100"
                    onClick={() =>
                      startPlan({
                        key: "standard",
                        title: "Standard Plan",
                        price: "₦2500",
                        per: "staff",
                        billing: "monthly postpaid",
                      })
                    }>
                    <span>Get Started</span>
                    <i>
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-xl-4">
            <div className="cs_pricing_card cs_style_1 cs_radius_20 overflow-hidden">
              <div className="cs_pricing_card_head cs_accent_bg cs_white_color">
                <h3 className="cs_white_color cs_fs_24 cs_semibold">
                  <span className="cs_accent_bg">Premium plan</span>
                </h3>
                <p>
                  Comprehensive on-demand access to Dsick bay services plus
                  premium features
                </p>
                <h2 className="cs_white_color mb-0 cs_fs_72 cs_semibold">
                  ₦3800<span className="cs_fs_24">/staff</span>
                </h2>
              </div>
              <div className="cs_pricing_card_body">
                <ul className="cs_pricing_card_feature cs_fs_20 cs_heading_color">
                  <li>
                    <i className="fa-solid fa-circle-check" /> Monthly postpaid
                    bill
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> 5 - 10% discount
                    if 30+ staff
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> 20% Annual prepay
                    discount
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" /> Monthly &
                    Quarterly KPIs
                  </li>
                </ul>
                <div className="cs_pricing_card_btn">
                  <button
                    className="cs_btn cs_style_1 w-100"
                    onClick={() =>
                      startPlan({
                        key: "premium",
                        title: "Premium plan",
                        price: "₦3800",
                        per: "staff",
                        billing: "monthly postpaid",
                      })
                    }>
                    <span>Get Started</span>
                    <i>
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                      <img src="assets/img/icons/arrow_white.svg" alt="Icon" />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <PlanSignupModal
          open={showModal}
          onClose={() => setShowModal(false)}
          plan={selectedPlan}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110" />
    </section>
  );
};

export default PricePlanContents;
