import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {lowerCase} from 'lodash';

function HeadLine({headlineObj, sumamryObj}){
    //console.log('sumamryObj obj is '+JSON.stringify(sumamryObj))
    const listItems = 
    <div>
         { Array.isArray(sumamryObj)
        ? sumamryObj.map(element => {
            return <li className="summary-list_items">{element}</li>
          })
        : null}
    </div>
   
const headLineDiv =() => lowerCase(headlineObj.type) === lowerCase("section")?
( <div className="site-logo-section">
    <div className="section-text">
        {headlineObj.headlineText}
    </div>
   
</div>

 ): (
    <div>
        <div className="headline-box">
            <div className="headline-text">
               {headlineObj}
                
            </div>
            <div className="summary-text">
            <ul>
                {listItems}
            </ul>
                
            </div>
        </div>
    </div>
    
    
)






    return(
        <div>
            {headLineDiv()}      
        </div>

    );
}

export default HeadLine;