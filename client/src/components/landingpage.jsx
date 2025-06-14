import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../LandingPage.css'; 
const LandingPage = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="py-4 landinpage-header">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/">
          <img src="FullLogo_Transparent_NoBufferPNG.png" alt="Nutshell Logo" height="40" />
          </a>
          <div>
            <a href="/" className="link">Read Now</a>
            <a href="https://apps.apple.com/app/id6471580745">
              <picture>
                <source media="(max-width: 767px)" srcSet="./appstore-mobile.svg" />
                <source media="(min-width: 768px)" srcSet="./appstore.svg" />
                <img src="./appstore.svg" alt="App Store" height="32" loading="lazy" />
              </picture>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
              <picture>
                <source media="(max-width: 767px)" srcSet="./playstore-mobile.svg" />
                <source media="(min-width: 768px)" srcSet="./playstore.svg" />
                <img src="./playstore-mobile.svg" alt="Play Store" height="32" loading="lazy" />
              </picture>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-dark text-center">
        <div className="container">
          <div className='banner-text'>
          <h2 className="mb-3">AI-Powered News Summaries.<br/>Stay informed and to the point.</h2>
              <p class="mb-4">With so much happening and so little time. <br /> Reading long news articles every day isn’t always possible. That’s why we bring you the news in a nutshell, every story broken down into just 3 bullet points. <br />No clutter, no noise. Just what you need to know.</p>
          </div>
          <div className="mb-3">
          <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                <img src="./appstore.svg" alt="App Store" className="me-2" height="40" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
                <img src="./playstore.svg" alt="Google Play" className="me-2" height="40" />
            </a>
            {/* <img src="./youtube.svg" alt="YouTube" height="40" /> */}
          </div>
          <img src="./banner-img.png" alt="Phones" className="img-fluid banner-phone-img" style={{ maxWidth: '600px' }} />
        </div>
      </section>

      {/* Features */}
      <section className="section-light">
        <div className="container">
          <div className="row align-items-center mb-5 mb-mg-top">
            <div className="col-md-6 cs-pd-left">
              <h4 className="highlight">Three-Point News —<br />That’s Nutshell.</h4>
              <p className="highlight-para">
                Boiled down, never watered down. Each story arrives in just three crisp bullets that you can scan in seconds.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <picture>
                <source media="(max-width: 767px)" srcSet="./three-points-mobile.png" />
                <source media="(min-width: 768px)" srcSet="./three-points.png" />
                <img src="./three-points.png" alt="Phones" className="img-fluid" />
              </picture>
            </div>
          </div>
        </div>
          <div className="container-fluid pd-0 mb-bt-30">
            <div className="row align-items-center mb-5 flex-md-row-reverse">
              <div className="col-md-6 cs-pd-left">
                <h4 className="highlight">All Angles, One Feed.</h4>
                <p className="highlight-para">Multi-source mash-up. We bundle each story’s coverage from various sources, with every source link right there so you can open the originals whenever curiosity strikes.</p>
              </div>
              <div className="col-md-6 text-center pd-0">
                <img src="./all-in-one.png" alt="Phone in hand" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6 cs-pd-left">
                <h4 className="highlight">Trust Built on Many Voices.</h4>
                <p className="highlight-para">Cross-checked by AI. Our model compares facts across outlets, flagging inconsistencies before they reach you.</p>
              </div>
              <div className="col-md-6 text-center">
                <img src="./trust-banner.png" alt="Phone screenshot" className="img-fluid" />
              </div>
            </div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 text-center best-b-container">
        <h2>Best in the Business</h2>
        <div className="bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-icon mb-3">
                  <img src="./rating.png" className="bst-b-icon" alt="" />
                </div>
                <h5>Trusted by users.</h5>
        <p>With a rating of 4.4, we’re one of the best-rated news apps on the Play Store, and the best AI-generated news app.</p>
              </div>
              <div className="col-md-4">
                <div className="feature-icon mb-3">
                  <img src="./adblocker.png" className="bst-b-icon" alt="" />
                </div>
                <h5>All the Experience</h5>
        {/* <p>At Nutshell, we don’t sell your attention—we earn your trust. Just clean, credible news from real sources. No distractions, no sponsored noise</p> */}
        <p>At Nutshell, we don’t sell your attention—we earn your trust. Just clean, credible news from real sources.</p>
              </div>
              <div className="col-md-4">
                <div className="feature-icon mb-3">
                  <img src="./newspaper.png" className="bst-b-icon" alt="" />
                </div>
                <h5>Top Publishers Combined</h5>
        <p>Stories from top newspapers, blogs, and magazines. Credible news from many sources into one clean easy-to-read feed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container text-center pre-footer">
        <h2 className="mb-1">Want to get connected?</h2>
        <p className="contact-para">Please email us at: <a href="mailto:admin@nutshellnews.in" className='footer-m-link'>admin@nutshellnews.in</a></p>
      </div>
      <div className="icon-container text-center">
        <h3>Download the easiest way to stay informed</h3>
        <a href="https://apps.apple.com/app/id6471580745" rel='nofollow'>
        <img src="appstore.svg" alt="App Store" className="me-2" height="40" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.andthenewsisapp">
        <img src="playstore.svg" alt="Google Play" height="40" />
        </a>
      </div>
      <div className="gradient-border"></div>
      <div className="landinpage-footer">
        <a href="/"><img src="https://www.nutshellnews.in/FullLogo_Transparent_NoBuffer.png" alt="Logo" height="40" /></a>
        <p className="mt-3 small">&copy; 2025 Nutshell News. All rights reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
