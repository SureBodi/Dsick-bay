// template.js (or app/layout.js if using App Router)
import Navbar from "@/components/Navbar";
import NewNavbar from "@/components/NewNavbar";
import Script from "next/script";
import React from "react";

const Template = ({ children }) => {
  return (
    <>
      {/* Use next/head or layout metadata in a real app, but keeping your structure: */}
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <title>Dsick bay - Workplace Health & Wellbeing | Vaedoc</title>
        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animate.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/lightgallery.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/jquery.timepicker.min.css"
        />
        <link rel="stylesheet" href="/assets/css/plugins/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/plugins/select2.min.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/animated-headline.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      {/* <Navbar /> */}
      <NewNavbar />
      {children}

      {/* Fix className typos (React needs className) */}
      <span className="cs_scrollup">
        <i className="fa-solid fa-arrow-up"></i>
      </span>

      {/* JS: jQuery first, then plugins, then main.js */}
      <Script
        src="/assets/js/plugins/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/slick.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/odometer.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/isotope.pkg.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/lightgallery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/jquery.timepicker.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/jquery-ui.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/select2.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/ripples.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/plugins/animated-headline.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
};

export default Template;
