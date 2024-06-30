import React from 'react';
import Slider from 'react-slick';
import {Container, Row, Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SummaryPoints(){
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    
    return(
        <Slider {...settings}>
            <div className='slick-slide'>Slide 1</div>
            <div className='slick-slide'>Slide 2</div>
            <div className='slick-slide'>Slide 3</div>
        </Slider>   
        
    )
}

export default SummaryPoints;