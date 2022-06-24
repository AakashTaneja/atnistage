import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from  'react-loader-spinner'

function Loader(){
    return(
        <div className="loader-custom">
            <Circles
                height="100"
                width="100"
                color='#f5e5c4'
                ariaLabel='loading'
            />

        </div>
    
    )
}

export default Loader;