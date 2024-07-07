import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiTrendingUp } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import APIAddress from './RestApi';


function Navbar2(){

    const navigate = useNavigate();
    const [isFocused, setIsFocused] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const searchAPIHost = APIAddress.serverAddress
    //const searchAPIURL = searchAPIHost + 'sections'


    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [selected, setSelected] = React.useState('home');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            if(searchTerm.trim() !== ''){
                try {
                    //var searchAPIURL = searchAPIHost+ 'search?query=' + searchTerm
                    // console.log('Enter key pressed with search term:', searchTerm);
                    //console.log('search api url is '+searchAPIURL)
                    // Example fetch call to a search API
                    //const response = await fetch(searchAPIHost+ 'search?query=' + searchTerm);
                    //const data = await response.json();
                    //setSearchResults(data.results); // Adjust this according to your API response structure
                    const newWindow = window.open(`/search?searchTerm=${searchTerm}`, '_blank', 'noopener,noreferrer');
                    if (newWindow) newWindow.opener = null;
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
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

                {/* nutshell logo */}
                <div className="logo-search-container">         
                    <div>
                        <a href="/"><img className="hamaralogo" src="FullLogo_Transparent_NoBuffer.png" alt="Nutshell news"></img></a>
                    </div> 
                </div> 

    

                <div className="search-button-container">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder=" enter search text"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setSearchTerm(e.target.value)}
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