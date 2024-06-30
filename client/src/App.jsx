import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import TrendingPage from "./components/TrendingPage";
import Navbar2 from "./components/Navbar2";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import TrendingPageMobile from "./components/TrendingPageMobile";
// import AppBannerSmart from "./components/AppBannerSmart";

//import ReactGA from 'react-ga';




function App() {
    // React.useEffect(()=>{
    //     console.log("Inside useEffect");
    //     ReactGA.initialize('G-QTDD64JWRN');
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // }, [])


    return (
        
        <Router>
            <Navbar2 /> 
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/trending" element={<TrendingPage />}></Route>
                <Route path="/trendingmobile" element={<TrendingPageMobile />}></Route>
                <Route path="/search" element={<SearchResult />}></Route>
            </Routes>
        </Router>
       
        
       
    );


}

export default App;