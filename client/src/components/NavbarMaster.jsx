import React from "react";
import { useMediaQuery } from 'react-responsive';
import Navbar2 from "./Navbar2";
import Navbar2Mobile from "./Navbar2Mobile";

function NavbarMaster({searchFired, setSearchFired}){
    // Define a single condition for desktop and tablet
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return(
        <>       
            {isDesktopOrTablet && <Navbar2 />
                
            }
            { isMobile && <Navbar2Mobile searchFired={searchFired} setSearchFired={setSearchFired}/>
            }
        </>
    )
}

export default NavbarMaster