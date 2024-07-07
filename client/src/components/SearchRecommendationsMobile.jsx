import React from "react";
import APIAddress from './RestApi';
import SearchResultsMobile from "./SearchResultsMobile";


function SearchRecommendationsMobile({setPlaceHolderText, searchFired, setSearchFired}){
    // alert('SearchRecommendationsMobile '+searchFired)
    const fetchAPIURLRec = APIAddress.serverAddress + 'searchrec'
    const fecthAPIURLSearch = APIAddress.serverAddress + 'search?full=true&query='
    const [recData, setRecData] = React.useState()
    // const [searchFired, setSearchFired] = React.useState(false)
    const [searchTerm, setSearchTerm] = React.useState('')


    React.useEffect(() => {
        //console.log('SearchRecommendationsMobile useEffect '+fetchAPIURLRec)
        fetch(fetchAPIURLRec)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setRecData(data);
            //console.log(data)
            
        })
    }, []);

    function handleItemClick(recItem){
        //alert('pressed '+recItem)
        // setSearchTerm(recItem)
        // setSearchFired(true)
        const newWindow = window.open(`/recresultmobile?item=${recItem}`, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const renderKeywords = (recItem) => {
        var keysList = [];
        if (recItem.recommendations){
            //console.log('item reccomendation is ' + JSON.stringify(item.recommendations));
            // Extract keys of the JSON object
            const keys = Object.keys(recItem.recommendations);
            // Convert keys to a list
            keysList = keys.map(key => key);
            //console.log('keys list is ' + keysList);
        }

        return (
            <>
                {keysList && keysList.map((keyword_item) => 
                <div className="search-rec-keyword-container">
                    <div className="search-rec-keyword" onClick={() => handleItemClick(keyword_item)}>
                        {keyword_item}
                    </div>
                </div>
                    
                )}
            </>
        )
    }

    return(

        
        <>
        {
            searchFired 
            ? 
            <SearchResultsMobile searchTerm={searchTerm}/>
                
            :
            
            <div className="search-rec-mobile-container">

            <div className="mesage-see-what">
                {'See what others are searching for...'}
            </div>
           
            
            {/* <SearchResultsMobile searchData={searchTermData} searchTerm={searchTerm}/> */}

            <div>
            {
            recData && recData.map(recItem => 
                <div className="search-section-recommendations">
                    <div>{
                            renderKeywords(recItem)

                    }</div>
                    <div className="search-rec-in-section">
                        {'in '}{recItem.display}
                    </div>
                    
                </div>
                    
            
                )
            }
            </div>
            

            <div className="margin-filler-searchrec">

            </div>

        </div>
        }
        </>
        
    )
}

export default SearchRecommendationsMobile