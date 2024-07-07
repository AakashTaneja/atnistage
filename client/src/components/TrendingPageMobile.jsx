import React from "react";
import APIAddress from "./RestApi";
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

function TrendingPageMobile(){

    const navigate = useNavigate();
    const [trendingData, setTrendingData] = React.useState();
    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    

    const fetchAPIURL = APIAddress.serverAddress + 'trending'
    React.useEffect(() => {
        //console.log('Sections useEffect fetching sections api from '+fetchAPIURL)
        fetch(fetchAPIURL)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setTrendingData(data);
            //console.log(data)
            
        })
    }, []);

    function handleClick(trendingitem, index){
        const indexString = encodeURIComponent(index);
        const itemString = encodeURIComponent(JSON.stringify(trendingitem));
        //window.location.href = tweetURL;
        //console.log("pushing to GA4 site_name "+Newsinline_GA4);
        window.dataLayer.push({
            event: 'trending_clicked',
        });
        console.log('index clicked is '+index)
        console.log('trending item is '+trendingitem)
        //navigate('/trending');
        // window.open( 
        //     socialdata.url, "_blank");
        //const dataToPass = { message: 'Hello from Home!' };
        //const dataString = encodeURIComponent(JSON.stringify(dataToPass));
        navigate(`/trending?item=${itemString}&index=${indexString}`);
        //const newWindow = window.open(`/trending?item=${itemString}&index=${indexString}`, '_blank', 'noopener,noreferrer');
        //if (newWindow) newWindow.opener = null;
        
    }


    //console.log('trendingData is '+trendingData)
    //console.log('trendingData type  is '+typeof trendingData)
    return(
        <div className="trending-container-mobile">
            {
                trendingData && trendingData.map((newsitem, index) =>
                    
                        <div className="trending-item-mobile" onClick={() => handleClick(newsitem, index)}>
                            <div className="trending-keyword-trending-page-mobile ">
                                {newsitem.keywords}
                            </div>
                            

                           {
                            newsitem.capsules && newsitem.capsules.map((capsuleitem, index) =>
                            <div className="trending-mobile-healine-image-container">
                                <div className="trending-headline-published-container">
                                    <div className="headline-text-trending-mobile">
                                        {capsuleitem.headline}  
                                    </div>
                                    <div className="trending-section-published-mobile-container">
                                        <div className="published-displayname">
                                            {capsuleitem.display_name}
                                        </div>
                                        <div className="published-text">
                                             {capsuleitem.published + ' IST'}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <img className ="trending-image" src={capsuleitem.social[0].image}></img>
                                </div>
                            </div>
                            )
                           } 
                            
                           
                                
                           
                        </div>
                    

            
               
                )
                }
        </div>
    )
}

export default TrendingPageMobile