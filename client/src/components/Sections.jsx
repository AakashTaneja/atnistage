import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Capsule from './Capsule';


function Sections(){

    var fetchAPIURL = ''
    var fetchAPIHost = ''
    const [dbname_capsule, setDbname_capsule] = React.useState('news') 
    const env = 'PROD';
    if (env === 'STAGE'){
        fetchAPIHost = 'http://192.168.1.5:3002/api/'
        fetchAPIURL = fetchAPIHost + 'sections'
    } else if (env === 'PROD'){
        fetchAPIHost = 'https://api.nutshellnews.in/api/'
        //fetchAPIHost = 'http://nutshellbackend-621736138.ap-south-1.elb.amazonaws.com/api/'
        fetchAPIURL = fetchAPIHost + 'sections'
    }
    
    //console.log('in sections'+apihostObject.apihostObject)
    const [sectionsDataFromDB, setsectionsDataFromDB] = React.useState([]);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const buttonsRef = React.useRef([]);

    const isMobile = () => {
        return window.innerWidth <= 768;
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
    }, []);

    function handleSectionClick(index, dbname){
        setActiveIndex(index);
        setDbname_capsule(dbname)
        //console.log('Sections handleClick on dbname '+ dbname)
        //console.log('Sections handleClick dbnamecapsule is '+ dbname_capsule)
        //console.log('handleSectionClick dbname_capsule is '+ dbname_capsule)
        //setInitiated(true)
        if (isMobile()){
            buttonsRef.current[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
        
        window.dataLayer.push({
            event: 'section_click_'+dbname,
            section_name: dbname,
        });
      }

    
    return(
        <div>
        <Container className="sectionscarousel mx-lg-6">
        <Row>
            <Col className="mx-mobile-2 mx-lg-6">
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
            </Col>
        </Row> 
        </Container> 
        
       <Capsule dbname_capsule={dbname_capsule} fetchAPIHost={fetchAPIHost}/>
            

    </div>

       
        
       

    );
}

export default Sections;