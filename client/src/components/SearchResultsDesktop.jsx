import React from "react";
import Footer from "./Footer";
import { useSearchParams } from "react-router-dom";
import APIAddress from './RestApi';
import SocialInline from "./SocialInline";
import HeadLineSummary from "./HeadlineSummary";
import Margin from "./Margin";
import Loader from "./Loader";

function SearchResultsDesktop(){
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get('searchTerm')
    const searchAPIHost = APIAddress.serverAddress
    const [searchData, setSearchData] = React.useState([])
    const [isLoaded, setIsLoaded] = React.useState(false)


    React.useEffect(() => {
        //console.log('Sections useEffect fetching sections api from '+fetchAPIURL)
        fetch(searchAPIHost+ 'search?query=' + searchTerm)  
        .then(res => {
            return res.json();
        })
        .then((data) =>{
            data.sort((a, b) => a.index - b.index);
            setSearchData(data);
            setIsLoaded(true)
            //console.log(data)
            
        })
    }, []);


    return (
        <div className="search-results-desktop-container">
        {
            isLoaded ?
                searchData.length > 0 ? 
                    searchData.map(newsitem => 
                    <>
                            {/* <hr className="horizontalline-partial"/> */}

                        <div className="capsule-master-trending">
                            
                                    
                            {/* <Row>
                                <Col className="p-0">
                                <HeadLine headlineObj={newsitem.headline} sumamryObj={newsitem.summary}/>
                                </Col>
                            </Row>  */}
                        

                            {/* <div className="in-a-nutshell hidden-mobile">
                                {'Sources'}          
                            </div> */}

                            <div>
                                <div className="trending-keyword-tending-page">
                                    {/* {display_keywords} */}
                                </div>
                            </div>   

                            <div>
                                <div className="social-inline">
                                    <SocialInline socaildata={newsitem.social} />
                                </div>
                            </div>   

                                <div className="headline-summary">
                                    <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published} highlightTerm={searchTerm}/>
                                </div>
                
                            
                            
                            
                        </div>
                    </>


            )
            :
            
            <div className="no-serach-results">
                {'No results for '} {searchTerm} {' .Please try again with different search criteria'}
            </div>
        :
        <Loader />
    } 
        <Margin />
        <Footer />
        </div>
    )
}

export default SearchResultsDesktop