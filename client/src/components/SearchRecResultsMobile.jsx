import React from "react";
import { useSearchParams } from "react-router-dom";
import APIAddress from "./RestApi";
import SocialInline from "./SocialInline";
import HeadLineSummary from "./HeadlineSummary";

function SearchRecResultsMobile(){
    const fecthAPIURLSearch = APIAddress.serverAddress + 'search?full=true&query='
    const [searchParams] = useSearchParams();
    const item = searchParams.get('item')
    const [searchData, setSearchData] = React.useState([])
    React.useEffect(() => {
        //console.log('useeffect SearchResultsMobile')
        var search_url = fecthAPIURLSearch + item
        //console.log('search_url is '+search_url)
        fetch(search_url)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setSearchData(data);
            //console.log('setSearchData '+data)
            
        })
    }, []);
    //alert('search item is '+item)
    return (
        <div className="search-results-desktop-container">
            {  
                searchData &&  searchData.map((newsitem,index )=>
           

            <div className="capsule-master-trending">   
                <div className="social-inline">
                    <SocialInline socaildata={newsitem.social} />
                </div>
                <div className="headline-summary">
                    <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published} highlightTerm={item}/>
                </div>
            </div> 


                )}

        </div>
    )
}

export default SearchRecResultsMobile