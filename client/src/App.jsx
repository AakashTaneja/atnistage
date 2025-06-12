import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import TrendingPage from "./components/TrendingPage";
import NavbarMaster from "./components/NavbarMaster";
import Home from "./components/Home";
import SearchResultsDesktop from "./components/SearchResultsDesktop";
import SearchPageMobile from "./components/SearchPageMobile";
import SearchResultsMobile from "./components/SearchResultsMobile";
import TrendingPageMobile from "./components/TrendingPageMobile";
import SearchRecResultsMobile from "./components/SearchRecResultsMobile";
import LandingPage from "./components/landingpage";

function AppContent() {
  const location = useLocation();
  const [searchFired, setSearchFired] = React.useState(false);

  // Hide Navbar on landing page
  const hideNavbarPaths = ["/landingpage"];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && (
        <NavbarMaster searchFired={searchFired} setSearchFired={setSearchFired} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/trendingmobile" element={<TrendingPageMobile />} />
        <Route path="/search" element={<SearchResultsDesktop />} />
        <Route
          path="/searchmobile"
          element={
            <SearchPageMobile searchFired={searchFired} setSearchFired={setSearchFired} />
          }
        />
        <Route path="/searchresultmobile" element={<SearchResultsMobile />} />
        <Route path="/recresultmobile" element={<SearchRecResultsMobile />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
