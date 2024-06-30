import React, { useState, useEffect, useRef } from 'react';
import APIAddress from './RestApi';
import Capsule from './Capsule';


function Sections(){

    const [dbname_capsule, setDbname_capsule] = React.useState('news') 
    const fetchAPIHost = APIAddress.serverAddress
    const fetchAPIURL = fetchAPIHost + 'sections'
   
    
    //console.log('in sections'+apihostObject.apihostObject)
    const [sectionsDataFromDB, setsectionsDataFromDB] = React.useState([]);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const buttonsRef = React.useRef([]);

    const isMobile = () => {
        return window.innerWidth <= 768;
      };

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef(null);

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollWidth > container.clientWidth + container.scrollLeft);
    };

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: 200, behavior: 'smooth' });
    };
    


    React.useEffect(() => {
        //console.log('Sections useEffect fetching sections api from '+fetchAPIURL)
        fetch(fetchAPIURL)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setsectionsDataFromDB(data);
            //console.log(data)
            
        })
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition(); // Initial check

        return () => {
            container.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);


    function handleSectionClick(index, dbname){
        setActiveIndex(index);
        setDbname_capsule(dbname)
        const button = buttonsRef.current[index];
        const container = scrollContainerRef.current;
        
        const buttonOffsetLeft = button.offsetLeft;
        const containerWidth = container.offsetWidth;
        const buttonWidth = button.offsetWidth;
        
        const scrollPosition = buttonOffsetLeft - (containerWidth / 2) + (buttonWidth / 2);
        //console.log('Sections handleClick on dbname '+ dbname)
        //console.log('Sections handleClick dbnamecapsule is '+ dbname_capsule)
        //console.log('handleSectionClick dbname_capsule is '+ dbname_capsule)
        //setInitiated(true)
        if (isMobile()){
            //buttonsRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            //window.scrollTo(0, 0);
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
        
        window.dataLayer.push({
            event: 'section_click_'+dbname,
            section_name: dbname,
        });
      }

    
    return(
        <>

{/* <Container className="desktopcontainer mx-lg-6" >
            <div className="hidden-mobile left-div">
                News for you
            </div>
            <div className="hidden-mobile right-div padding-right-div">
                Trending
            </div>
                
            </Container> */}

<div className="sections">
        <div className="scroll-wrapper">
        <button className="scroll-button left hidden-mobile" onClick={scrollLeft} disabled={!canScrollLeft}>&lt;</button>
        <div className="all-sections" ref={scrollContainerRef}>
             {  
                sectionsDataFromDB && sectionsDataFromDB.map((sectionitem, index) =>
                <button
                    key={index}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className={`sectionbutton ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleSectionClick(index, sectionitem.db)}
                    >{sectionitem.display}
                </button>
                //index ? 
                    //<Section index={index} display={sectionitem.display} db={sectionitem.db} handleSectionClick={handleSectionClick} activeIndex={activeIndex}/> 
                  //  :
                  //  <Section index={index} display={sectionitem.display} db={sectionitem.db} handleSectionClick={handleSectionClick} firstButtonStyle={{firstButtonStyle}}/>     

                )
            }
        </div>
        <button className="scroll-button right hidden-mobile" onClick={scrollRight}>&gt;</button>
       

        </div>
       
           
    </div>
    <div className="capsule-container">
         <Capsule dbname_capsule={dbname_capsule} fetchAPIHost={fetchAPIHost}/>
    </div>
        
       

        </>
        
            

    

       
        
       

    );
}

export default Sections;