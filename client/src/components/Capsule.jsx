import React, { useEffect, useState } from 'react';
// import newsdata from "../newsdata";
// import newsdataJSON from "../newsdataJSON";
//import resultsFromDB from "../Database";
import HeadLine from "./HeadLine.jsx";
import {Container, Row, Col} from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import SocialSlider from "./SocialSlider";
import Margin from "./Margin";
import Loader from "./Loader.jsx";
// var newsDataFromDB = [{}];

// async function fetchNewsDB(){
//     const res = await fetch('http://localhost:3001/api/news',{
//         method: 'GET',
//     });
//     newsDataFromDB = await res.json();
//     console.log(newsDataFromDB); 
// }
// fetchNewsDB();


function Capsule({dbname_capsule, fetchAPIHost}){

    const [fetchAPIURL, setFetchAPIURL] = React.useState(fetchAPIHost.concat(dbname_capsule))
    console.log('Capsule dbname_capsule is '+JSON.stringify(dbname_capsule))
    console.log('Capsule fetchAPIURL is '+fetchAPIURL)
   
    
    
    const [newsDataFromDB, setnewsDataFromDB] = React.useState([]);
    const [hasMoreData, setHasMoreData] = React.useState(true);
    const [page, setPage] = React.useState(0);
   
   
    // const env = 'STAGE';
    // if (env === 'STAGE'){
    //     fetchAPIHost = 'http://192.168.1.12:3002/api/'
    //     fetchAPIURL = fetchAPIHost + 'news'
    // } else if (env === 'PROD'){
    //     fetchAPIHost = 'https://api.nutshellnews.in/api/'
    //     fetchAPIURL = fetchAPIHost + 'news'
    // }

    React.useEffect(() => {
        console.log('useEffect dbname_capsule is '+dbname_capsule)
        setFetchAPIURL(fetchAPIHost.concat(dbname_capsule))
        
        console.log('useEffect fetchAPIURL is '+fetchAPIURL)
        
        fetch(fetchAPIURL + "?page="+page+"&limit=3")
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setnewsDataFromDB(data);
            setPage(page+1);
            //console.log("page num is "+page);
            
        })
    }, [dbname_capsule, fetchAPIURL]);


    

    const fetchMoreCapsues = async()=>{
        const res =  await fetch(fetchAPIURL+"?page="+page+"&limit=3");
        window.dataLayer.push({
            event: 'capsule_fetch'
        });

        const data = res.json();
       
        setPage(page+1);
        //console.log("page num fetchMoreCapsues is "+page);
        
        return data;
    }

   

    const fetchData = async () =>{
        const capsulesFromServer =  await fetchMoreCapsues();
        //console.log("next items "+capsulesFromServer);
        if(capsulesFromServer.length === 0){
            setHasMoreData(false);
        }
        setnewsDataFromDB([...newsDataFromDB, ...capsulesFromServer]);
    };
    
    
    return(

        <div>
            
            <div className="carousel">
            <InfiniteScroll
                dataLength={newsDataFromDB.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMoreData}
                loader={<Loader />}
                endMessage={
                    <p style={{ textAlign: 'center', }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }

            >
            
            {  
                newsDataFromDB && newsDataFromDB.map(newsitem =>

            <div>
                <Container className="mastercarousel">
                       
                        <Row>
                            <Col className="p-0">
                            <HeadLine headlineObj={newsitem.headline} sumamryObj={newsitem.summary}/>
                            </Col>
                        </Row> 
                        <Row>
                            <Col>
                                <SocialSlider socaildata={newsitem.social} />
                            </Col>
                        </Row>
                        
                    </Container> 
                    <Margin />
            </div>
)}
 
   
</InfiniteScroll>
</div>
 



</div>
       
        
       

    );
}

export default Capsule;