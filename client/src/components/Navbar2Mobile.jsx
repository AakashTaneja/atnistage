import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiTrendingUp } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import APIAddress from './RestApi';




function Navbar2Mobile({searchFired, setSearchFired}){
    //alert(window.location.pathname)

    const navigate = useNavigate();
    
    const searchAPIHost = APIAddress.serverAddress
    const searchAPIURL = searchAPIHost + 'sections'

    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    var initial_state = 'home'
    if(window.location.pathname.includes('recresultmobile') ){
        initial_state = 'searchmobile'
    }


    const [selected, setSelected] = React.useState(initial_state);

    // when recommended items are clicked a new window is opened, it is by default setting home as active, instead make searchmobile as active.
    // if(window.location.pathname.includes('recresultmobile') ){
        
    //     setSelected('searchmobile')

    // }

    function handleClick(section){
        // console.log(section+ ' clicked')
        setSelected(section);
        if (section === 'searchmobile'){
            setSearchFired(false) // we need to do this so that on clicking the serach in navbar, recommendations are loaded again.
        }
        navigate(`/${section}`);

    }
    function setSearchQuery(e){

    }
    return(
        <>
            <div className="header-container">
             <div className="logo-search-container">
             {
                isMobile &&
                <>
                    <div className={`trending-button-container hidden-desktop`}
                        onClick={() => handleClick('home')}
                    >
                        <div className="trending-text">
                            <img className="hamaralogo-mobile" src="FullLogo_Transparent_NoBufferPNG.png" alt="Nutshell news"></img>
                        </div> 
                        <div className={`trending-text ${selected === 'home' ? 'active' : ''}`} >
                        {'Home'}
                        </div>
                    </div>
                
                    <div onClick={() => handleClick('trendingmobile')}>
                    <div className={`trending-text ${selected === 'trendingmobile' ? 'active' : ''}`} >
                        <HiTrendingUp 
                            style={{
                            
                            }}
                            size="32px"
                        />
                    </div>
                    <div className={`trending-text ${selected === 'trendingmobile' ? 'active' : ''}`} >
                        {'Trending'}
                    </div>
                    </div>

                    <div onClick={() => handleClick('searchmobile')} className="">
                        <div className={`trending-text ${selected === 'searchmobile' ? 'active' : ''}`} >
                            <IoSearch 
                                style={{
                                
                                }}
                                size="30px"
                            />
                        </div>
                        <div className={`trending-text ${selected === 'searchmobile' ? 'active' : ''}`} >
                            {'Search'}
                        </div>
                    </div>
   
            
                </>
                
             }
                

            </div> 

            </div>
            <hr className="horizontalline"/> 
        </>

        

        // <div className="container-fluid">
        //     <div className="header-container">
        //         <div className="col-lg-6 col-md-8 col-sm-8 px-0">
        //                 <a href="/"><img class="navbar-brand" className="hamaralogo" src="FullLogo_Transparent_NoBufferPNG.png" alt="Nutshell news"></img></a>
        //         </div> 
        //         <div className="col-lg-4 col-md-4 col-sm-2 px-0">
        //                 Search will come here
        //         </div> 
                
        //         <div className="col-lg-1 col-md-1 col-sm-0 px-0">
        //             <a href="/about" target="_blank" className="footer-link">
        //                 About           
        //             </a>

        //         </div>
        //         <div className="col-lg-1 col-md-1 col-sm-0 px-0">
        //             <a href="/contact" target="_blank" className="footer-link">
        //                     Contact           
        //                 </a>
        //         </div>
        //     </div>
                
        //         <hr className="horizontalline"/>  
        // </div>

       

    );
}

export default Navbar2Mobile;