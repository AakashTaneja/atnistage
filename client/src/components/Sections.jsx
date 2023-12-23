import React from 'react';
import Section from './Section';
import {Container, Row, Col} from "react-bootstrap";
import Capsule from './Capsule';


function Sections(){

    var fetchAPIURL = ''
    var fetchAPIHost = ''
    const [dbname_capsule, setDbname_capsule] = React.useState('news') 
    const env = 'PROD';
    if (env === 'STAGE'){
        fetchAPIHost = 'http://192.168.1.12:3002/api/'
        fetchAPIURL = fetchAPIHost + 'sections'
    } else if (env === 'PROD'){
        fetchAPIHost = 'https://api.nutshellnews.in/api/'
        fetchAPIURL = fetchAPIHost + 'sections'
    }
    
    //console.log('in sections'+apihostObject.apihostObject)
    const [sectionsDataFromDB, setsectionsDataFromDB] = React.useState([]);
    const [firstButtonStyle, setFirstButtonStyle] = React.useState({  "background-color": "#d3d1d1" })
    


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
    }, [dbname_capsule]);

    function handleSectionClick(dbname){
        setFirstButtonStyle({})
        //console.log('Sections handleClick on '+ dbname)
        setDbname_capsule(() => dbname)
        //console.log('handleSectionClick dbname_capsule is '+ dbname_capsule)
        //setInitiated(true)
      }

    
    return(
        <div>
        <Container className="horizontal-scrollable section-header">
        <Row>
            <Col className="p-0">
            {  
                sectionsDataFromDB && sectionsDataFromDB.map((sectionitem, index) =>
                index ? 
                    <Section index={index} display={sectionitem.display} db={sectionitem.db} handleSectionClick={handleSectionClick} firstButtonStyle={{}}/> 
                    :
                    <Section index={index} display={sectionitem.display} db={sectionitem.db} handleSectionClick={handleSectionClick} firstButtonStyle={{firstButtonStyle}}/>     

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