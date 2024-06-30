import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiTrendingUp } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';


function Navbar2(){

    const navigate = useNavigate();
    const [isFocused, setIsFocused] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [selected, setSelected] = React.useState('home');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
          try {
            // Example fetch call to a search API
            const response = await fetch(`https://api.example.com/search?q=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.results); // Adjust this according to your API response structure
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };


    function handleClick(section){
        // console.log(section+ ' clicked')
        // alert(section+ ' clicked')
        setSelected(section);
        navigate(`/${section}`);

    }
    function setSearchQuery(e){

    }
    return(
        <>
            <div className="header-container">
             <div className="logo-search-container">
             {isDesktopOrTablet && 
                <div>
                    <a href="/"><img className="hamaralogo" src="FullLogo_Transparent_NoBuffer.png" alt="Nutshell news"></img></a>
                </div> 

             }
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

                    <div onClick={() => handleClick('search')} className="hidden-mobile">
                        <div className={`trending-text ${selected === 'search' ? 'active' : ''}`} >
                            <IoSearch 
                                style={{
                                
                                }}
                                size="30px"
                            />
                        </div>
                        <div className={`trending-text ${selected === 'search' ? 'active' : ''}`} >
                            {'Search'}
                        </div>
                    </div>
                    
                
                
            
                </>
                
             }
                

            </div> 

            {isDesktopOrTablet &&
                <>
                <div className="search-button-container hidden-desktop">
                    <div className="search-container">
                    <input
                        type="text"
                        placeholder=" enter search text"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onKeyDown={handleKeyPress}
                        className={isFocused ? 'search-input focused' : 'search-input'}
                    />
                    <IoSearch 
                                    style={{
                                    
                                    }}
                                    size="20px"
                                    className="search-icon" 
                                />

                    </div>
                </div> 
                <div className="about-contact-container">
                
               
                    <a href="/about" target="_blank" className="footer-link hidden-mobile">
                            About           
                    </a>
                    <a href="/contact" target="_blank" className="footer-link hidden-mobile">
                                Contact
                    </a>

               
            </div>
                </>
            }

            
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

export default Navbar2;