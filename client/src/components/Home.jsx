import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import Sections from './Sections';
import Footer from './Footer';
import FooterMobile from './FooterMobile';
import TrendingContainer from './TrendingContainer';
import Margin from './Margin';

const Home = () => {
    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [isVisible, setIsVisible] = useState(false);

    function getOS() {
        var uA = navigator.userAgent || navigator.vendor || window.opera;
        if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
      
        var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
        for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
      }

    var os = getOS()

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    function scroll_to_top(){
        if (os === 'Android' || os === 'iOS'){
            return(
                <div className="scroll-to-top" onClick={scrollToTop}>
                    {/* <div className="line"></div> */}
                    <div className="arrow"></div>
                    <div className="text">TOP</div>
                    {/* <div className="line"></div> */}
                </div>
            )

        }
        else {
            return(
                <div className="scroll-to-top-desktop" onClick={scrollToTop}>
                    {/* <div className="line"></div> */}
                    <div className="arrow"></div>
                    <div className="text">TOP</div>
                    {/* <div className="line"></div> */}
                </div>
            )
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // const [canScrollLeft, setCanScrollLeft] = useState(false);
    // const [canScrollRight, setCanScrollRight] = useState(true);
    // const scrollContainerRef = useRef(null);

    // const checkScrollPosition = () => {
    //     const container = scrollContainerRef.current;
    //     setCanScrollLeft(container.scrollLeft > 0);
    //     setCanScrollRight(container.scrollWidth > container.clientWidth + container.scrollLeft);
    // };

    // const scrollLeft = () => {
    //     const container = scrollContainerRef.current;
    //     container.scrollBy({ left: -200, behavior: 'smooth' });
    // };

    // const scrollRight = () => {
    //     const container = scrollContainerRef.current;
    //     container.scrollBy({ left: 200, behavior: 'smooth' });
    // };

    // useEffect(() => {
    //     const container = scrollContainerRef.current;
    //     container.addEventListener('scroll', checkScrollPosition);
    //     checkScrollPosition(); // Initial check

    //     return () => {
    //         container.removeEventListener('scroll', checkScrollPosition);
    //     };
    // }, []);
    return (
        <div className="container-fluid">
            <div className="row px-0">
                <div className="col-lg-8 col-md-12 col-sm-12 px-0 scrollable-content">
                    {/* <div className="sections"> */}
                        {/* <h2>Sections</h2> */}
                        {/* <div className="scroll-wrapper">
                        <button className="scroll-button left hidden-mobile" onClick={scrollLeft} disabled={!canScrollLeft}>&lt;</button>
                            <div className="all-sections" ref={scrollContainerRef}> */}
                                {/* Horizontal scrollable content */}
                                {/* <div className="item">Item 1</div>
                                <div className="item">Item 2</div>
                                <div className="item">Item 3</div>
                                <div className="item">Item 4</div>
                                <div className="item">Item 5</div>
                                <div className="item">Item 6</div> */}
                                {/* <div className='sub-sections-desktop hidden-mobile'>
                                     {'News for you'}
                                </div> */}
                                
                                <Sections />
                            {/* </div>
                            <button className="scroll-button right hidden-mobile" onClick={scrollRight}>&gt;</button>
                        </div> */}
                    {/* </div> */}
                </div>
                <div className="col-lg-4 col-md-3 d-none d-md-block">
               
                    <div className="trending">
                        <div className='sub-sections-desktop hidden-mobile'>
                            {'Trending'}
                        </div>  
                        {/* <h2>Trending</h2> */}
                        {/* Trending content here */}
                        <TrendingContainer />
                    </div>
                </div>
            </div>
            {isVisible && 
                    scroll_to_top()
                }

                <Margin />
                
               {isDesktopOrTablet && <Footer />} 
               {isMobile && <FooterMobile />} 
                
        </div>
        
    );
};

export default Home;