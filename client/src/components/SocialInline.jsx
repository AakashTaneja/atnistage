import React from "react";
import { useRef, useState } from 'react'
import {Container, Row, Col} from "react-bootstrap";
import {lowerCase} from 'lodash';
import Tweet from "./Tweet";
import TweetWithImage from "./TweetWithImage";
import TweetAllImage from "./TweetAllImage"
import TweetMuchText from "./TweetMuchText";
import NewsInline from "./NewsInline";
import Youtube from "./Youtube";
import Instagram from "./Instagram";
import Koo from "./Koo";
import KooWithImage from "./KooWithImage";
import KooMuchText from "./KooMuchText";

function SocialInline({socaildata}){

  //console.log('socail data is '+socaildata)
    


const [scrollPosition, setScrollPosition] = useState(0);

  const scrollRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleRightScroll = () => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + 294;
  
    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);
  
    // Access the container element and set its scrollLeft property
    scrollRef.current.scrollLeft = newScrollPosition;
  };

  const handleLeftScroll = () => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition - 290;
  
    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);
  
    // Access the container element and set its scrollLeft property
    scrollRef.current.scrollLeft = newScrollPosition;
  };

    function hanldMobileScroll(){
            window.dataLayer.push({
                event: 'scrolled',
                site_name: 'aggregation',
            });
    }
        const renderSlides = () =>
      
        Array.from(socaildata).map(socialitem=>  
          
          
          lowerCase(socialitem.type) === lowerCase("Tweet") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <Tweet  socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("TweetWithImage") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <TweetWithImage socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("TweetAllImage") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <TweetAllImage socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("TweetMuchText") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <TweetMuchText socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("Instagram") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <Instagram socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("Koo") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <Koo socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("KooWithImage") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <KooWithImage socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("KooMuchText") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <KooMuchText socialdata={socialitem} /> </div> )
          : lowerCase(socialitem.type) === lowerCase("Youtube") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <Youtube socialdata={socialitem}/> </div> )
          : lowerCase(socialitem.type) === lowerCase("news") ?
          (<div className="social-inline-item" style={{ "min-width": 290 }}> <NewsInline socialdata={socialitem} /> </div> )
          : (<div style={{ width: 1 }}> </div> )
          
      
        );
    return(
        <div >
            <Row>
                
                  <Col className="fixed-width"> 
                    <button className="scroll-button left-button hidden-mobile" onScroll={hanldMobileScroll} onClick={handleLeftScroll} type="button"> {'<'} </button>
                  </Col>
                  <Col>

                    <div className="social-inline-container" onScroll={hanldMobileScroll} ref = {scrollRef}>
                        
                            {renderSlides()}
                       
                    </div>
                </Col>
                <Col className="fixed-width"> 
                    <button className="scroll-button right-button hidden-mobile" onScroll={hanldMobileScroll} onClick={handleRightScroll} type="button"> {'>'} </button>
                  </Col>
                

            </Row> 
        
        </div>
    )
}

export default SocialInline