import React from "react";
import APIAddress from "./RestApi";
import { useNavigate } from 'react-router-dom';

function TrendingContainer(){

    const navigate = useNavigate();
    const [trendingData, setTrendingData] = React.useState([]);
    const [indexCliekd, setIndexClicked] = React.useState(0)
    const fetchTrendingAPIURL = APIAddress.serverAddress + 'trending'

    React.useEffect(() => {
        //console.log('trending container useEffect '+fetchTrendingAPIURL)
        fetch(fetchTrendingAPIURL)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            // data.sort((a, b) => a.index - b.index);
            setTrendingData(data);
            console.log(data)
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
        // const dataToPass = { message: 'Hello from Home!' };
        // const dataString = encodeURIComponent(JSON.stringify(dataToPass));
        const newWindow = window.open(`/trending?item=${itemString}&index=${indexString}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    //console.log('trendings are '+trendingData)

    return(
        <div className="trending-container">
        {  
            trendingData && trendingData.map((trendingitem, index) =>
            <div className="trending-item" onClick={() => handleClick(trendingitem, index)}>
                <div className="trending-keyword">
                    {trendingitem.keywords}
                    {/* {setIndexClicked(index)} */}
                </div>
                {trendingitem.capsules && trendingitem.capsules.map((trendingcapsuleitem, index) =>
            <div className="trending-headline-image-container">

            <div className="trending-headline-published-container">
                <div className="trending-headline">
                    {trendingcapsuleitem.headline}
                </div>
                <div className="trending-section-published-container">
                    <div className="published-displayname">
                        {trendingcapsuleitem.display_name}
                    </div>
                    <div className="published-text">
                        {trendingcapsuleitem.published + ' IST'}
                    </div>
                </div>
                   

            </div>
                    
                
                <div className="trending-headline-image">
                    <img className ="trending-image" src={trendingcapsuleitem.social[0].image}></img>
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

export default TrendingContainer