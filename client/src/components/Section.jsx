import React, { useState } from "react";

function Section({index, display, db, handleSectionClick, activeIndex}){
  //console.log('section index is '+ JSON.stringify(index))
  console.log('index is '+index)
  //console.log('firstButtonStyle is '+ JSON.stringify(firstButtonStyle))
    //const [initiated, setInitiated] = React.useState(false);
    //var section_db = JSON.stringify(sectionObject.sectiondb)
    


    // function handleSectionClick(dbname){
    //     console.log('handleClick on '+ dbname)
    //     //setInitiated(true)
    //   }

    //console.log('inside section with '+section_db)
   
    return(
       <>
          {/* <div className="section-container" onClick={()=>handleSectionClick(db)}> */}
          <div className="section-container" onClick={()=>handleSectionClick(db)}>
              {/* <button className="section" style={firstButtonStyle.firstButtonStyle}>{display}</button> */}
              <button
                key={index}
               className={`sectionbutton ${activeIndex === index ? 'active' : ''}`}
               onClick={() => handleSectionClick(index)}
                >{display}
                </button>
          </div>
            
       </>
        
    
    )
}

export default Section;