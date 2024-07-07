import React from "react";
import APIAddress from "./RestApi";
import SearchInputMobile from "./SearchInputMobile";
import Loader from "./Loader";
import SearchResultsMobile from "./SearchResultsMobile";
import SearchRecommendationsMobile from "./SearchRecommendationsMobile";

function SearchPageMobile({searchFired, setSearchFired}){
    const [searchData, setSearchData] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState([]);
    const [placeHolderText, setPlaceHolderText] = React.useState(' enter search text');
    // const [searchFired, setSearchFired] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);

    // this is to sort on publisehd field coming from api.
    const parseCustomDate = (dateString) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const [time, dayMonthYear] = dateString.split(' ');
        const [day, monthStr, year] = dayMonthYear.split('-');
        const monthIndex = months.findIndex(month => month === monthStr);
        const [hours, minutes, seconds] = time.split(':');
        return new Date(year, monthIndex, day, hours, minutes, seconds);
    };

    const searchQuery = async (text, recFired) => {
        //console.log('searched text is ' + text);
        if (text){
            setSearchFired(true); // this is to ensure that no results found message is not shown before first search is fired.
            setLoading(true);
            setSearchTerm(text);
            //console.log('searchQuery searchj term is '+searchTerm)
            setPlaceHolderText(text);
            //analyticsTrigger();
            // console.log('rec fired is ' + recFired);
            var searchAPIURL = APIAddress.serverAddress + 'search?full=true&query=' + text;
            if (recFired){ //coming from search recommendation
                //console.log('rec fired is true');
                searchAPIURL = APIAddress.serverAddress + 'searchtrends?full=true&query=' + text;
                //console.log('firing search' + searchAPIURL);
            }
            fetch(searchAPIURL)
            .then(res => {
                return res.json();
            })
            .then((data) =>{
                //console.log('search data is ' + searchData);
                //console.log('search data length is ' + searchData.length);
                data.sort((a, b) => {
                    // sorting on published
                    const dateA = parseCustomDate(a.published);
                    const dateB = parseCustomDate(b.published);
                    //console.log(dateB - dateA);
                    return dateB - dateA;
                });
                setSearchData((data));
                // setTimeout(() => {
                //     setLoading(false);
                //   }, 5000); // Change delay as needed
                setLoading(false);
            }
            );
            //console.table(JSON.stringify(text, getCircularReplacer()))
            //console.log('type of searchData is ' + typeof(searchData))
            //console.log('searchData is ' + searchData);

        }
        else {

        }


    };

    return(
        isLoading ?
            <Loader />
            :

            <div className="search-page-mobile-container">
                <div>
                    <SearchInputMobile searchQuery={searchQuery} placeHolderText={placeHolderText} searchFired={searchFired}/>
                </div>

            {searchFired ?
                <div>
                    <SearchResultsMobile searchData={searchData} searchTerm={searchTerm}/>
                </div>
                :
                <div>
                   <SearchRecommendationsMobile setPlaceHolderText={setPlaceHolderText} searchFired={searchFired} setSearchFired={setSearchFired} />
                </div>}
                
            </div>
    )
}

export default SearchPageMobile