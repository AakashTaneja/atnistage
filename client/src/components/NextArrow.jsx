import React from "react";



function NextArrow(props){
  const ARROW_next = "./arrow_right.png";
    const { className, style, onClick } = props;
  return (
    <div
        className="slick-next"
        style={{...style, display: 'block'}}
        onClick={onClick}
    >
       <img src={ARROW_next} className= "arrowRight hidden-mobile"  alt="arrow_right"/>
    </div>
);

}

export default NextArrow;