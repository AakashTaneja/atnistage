import React from "react";
// import newsdata from "../newsdata";
// import newsdataJSON from "../newsdataJSON";
//import resultsFromDB from "../Database";
import HeadLine from "./HeadLine.jsx";
import {Container, Row, Col} from "react-bootstrap";
import SocialSlider from "./SocialSlider";
import Margin from "./Margin";
// var newsDataFromDB = [{}];

// async function fetchNewsDB(){
//     const res = await fetch('http://localhost:3001/api/news',{
//         method: 'GET',
//     });
//     newsDataFromDB = await res.json();
//     console.log(newsDataFromDB); 
// }
// fetchNewsDB();


function Capsule(){
    
    const [newsDataFromDB, setnewsDataFromDB] = React.useState(null);
    React.useEffect(() => {
        fetch('http://192.168.1.10:3001/api/news')
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setnewsDataFromDB(data);
        })
    }, []);
    
    
    return(
        
        <div className="carousel">
             
           {newsDataFromDB && newsDataFromDB.map(newsitem =>
           
           <div>
            {/* {alert(JSON.stringify(newsitem.headline))} */}
            <Container className="mastercarousel">
                    <Row>
                        <Col>
                        <HeadLine headline={newsitem.headline}/>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <SocialSlider socaildata={newsitem.social}/>
                        </Col>
                    </Row>
                    
                </Container> 
                <Margin />
           </div>
           )}
           
          
        </div>

    );
}

export default Capsule;