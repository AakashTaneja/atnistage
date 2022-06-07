import React from "react";

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <div className="footer">
            <p style={{color:"orange"}}>
            Copyright &copy; {currentYear} atni
            </p>
        </div>
        
    );
} 

export default Footer;