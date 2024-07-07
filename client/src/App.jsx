import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
// import AppBannerSmart from "./components/AppBannerSmart";

//import ReactGA from 'react-ga';




function App() {
    // React.useEffect(()=>{
    //     console.log("Inside useEffect");
    //     ReactGA.initialize('G-QTDD64JWRN');
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // }, [])
const [searchFired, setSearchFired] = React.useState(false)

    return (
        
        <Router>
            <NavbarMaster searchFired={searchFired} setSearchFired={setSearchFired}/> 
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/trending" element={<TrendingPage />}></Route>
                <Route path="/trendingmobile" element={<TrendingPageMobile />}></Route>
                <Route path="/search" element={<SearchResultsDesktop />}></Route>
                <Route path="/searchmobile" element={<SearchPageMobile searchFired={searchFired} setSearchFired={setSearchFired} />}></Route>
                <Route path="/searchresultmobile" element={<SearchResultsMobile />}></Route>
                <Route path="/recresultmobile" element={<SearchRecResultsMobile />}></Route>
            </Routes>
        </Router>
       
        
       
    );


}

export default App;