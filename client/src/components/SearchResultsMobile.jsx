import React from "react";
import SocialInline from "./SocialInline";
import HeadLineSummary from "./HeadlineSummary";
import APIAddress from './RestApi'; 

function SearchResultsMobile({searchTerm, searchFired}){
    // alert('in SearchResultsMobile, searchTerm is '+searchTerm)
    // alert('in SearchResultsMobile, searchFired is '+searchFired)
    const fecthAPIURLSearch = APIAddress.serverAddress + 'search?full=true&query='
    const [searchData, setSearchData] = React.useState()
    // const item = searchParams.get('item')
    //console.log('search data is '+JSON.stringify(searchData))
    // //console.log('type of search data is'+ typeof searchData)
    // console.log('search term is '+searchTerm)
    React.useEffect(() => {
        console.log('useeffect SearchResultsMobile')
        var search_url = fecthAPIURLSearch + searchTerm
        console.log('search_url is '+search_url)
        fetch(search_url)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setSearchData(data);
            console.log('setSearchData '+data)
            
        })
    }, []);


    return (
        <div className="search-results-desktop-container">
            {  
                searchData &&  searchData.map((newsitem,index )=>
           

            <div className="capsule-master-trending">   
                <div className="social-inline">
                    <SocialInline socaildata={newsitem.social} />
                </div>
                <div className="headline-summary">
                    <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published} highlightTerm={searchTerm}/>
                </div>
            </div> 


                )}

        </div>
    )
}

export default SearchResultsMobile