import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Capsule from "./components/Capsule";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
//import ReactGA from 'react-ga';




function App() {
    // React.useEffect(()=>{
    //     console.log("Inside useEffect");
    //     ReactGA.initialize('G-QTDD64JWRN');
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // }, [])


    return (
        <div className="master-div"> 
            <Router>
            
            <Navbar2 /> 
            <Routes>
                <Route path="/" element={Capsule()}></Route>
                <Route path="/about" element={About()}></Route>
                <Route path="/contact" element={Contact()}></Route>
            </Routes>
            <Footer />
        </Router>
        </div>
        
       
    );


}

export default App;