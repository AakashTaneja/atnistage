import React from "react";
import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import SocialInline from "./SocialInline";
import HeadLineSummary from "./HeadlineSummary";
import { useMediaQuery } from 'react-responsive';
import APIAddress from "./RestApi";
import Footer from "./Footer";

function TrendingPage(){
    const {item}= useParams()
    const [queryParams, setQueryParams] = React.useState({});
    const [moreNews, setMoreNews] = React.useState()
    const [isVisible, setIsVisible] = React.useState(false);
    var sectionType = ''

    React.useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const section_uri = {
        'Top news': 'news',
        'Entertainment': 'entertainment',
        'Sports': 'sports',
        'Business': 'markets',
        'Automobiles': 'vehicles',
        'World': 'world',
        'Technology': 'technology',
        'Health': 'health',
        'Science': 'science'

    }

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    function getOS() {
        var uA = navigator.userAgent || navigator.vendor || window.opera;
        if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS';
      
        var i, os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry'];
        for (i = 0; i < os.length; i++) if (new RegExp(os[i],'i').test(uA)) return os[i];
      }

    var os = getOS()
    function scroll_to_top(){
        if (os === 'Android' || os === 'iOS'){
            return(
                <div className="scroll-to-top" onClick={scrollToTop}>
                    {/* <div className="line"></div> */}
                    <div className="arrow"></div>
                    <div className="text">TOP</div>
                    {/* <div className="line"></div> */}
                </div>
            )

        }
        else {
            return(
                <div className="scroll-to-top-desktop" onClick={scrollToTop}>
                    {/* <div className="line"></div> */}
                    <div className="arrow"></div>
                    <div className="text">TOP</div>
                    {/* <div className="line"></div> */}
                </div>
            )
        }
    }

    function fetch_more(section_type){
        //console.log('fetch more section type is '+section_type)
        const section_type_api_value = section_uri[section_type] // this is for fetch url section type, check in section_uri for exact value
        sectionType = section_type // this is for more message
        //setSectionType(section_type_api_value)
        //console.log('section_uri map value is '+section_type_api_value)
        if (section_type_api_value){ // retrieve only if found in section_uri
            //console.log('fetch more section_type_api_value '+section_type_api_value)
            const fetch_more_URL = APIAddress.serverAddress + section_type_api_value
            //console.log('fetch more URL is '+fetch_more_URL)
            fetch(fetch_more_URL)  
            .then(res => {
             return res.json();
            })
            .then((data) =>{
                data.sort((a, b) => a.index - b.index);
                setMoreNews(data);
            //console.log(data)
            
         })

        }
        

    }

    function more_message(){
        return 'More in '+sectionType
    }


    const [searchParams] = useSearchParams();
    const items = JSON.parse(searchParams.get('item'))
    //console.log('ITEMS type is  '+typeof items)
    //console.log('ITEMS are '+JSON.stringify(items))
    var capsules = items["capsules"]
    var display_keywords = items["keywords"]
    const news_type = capsules[0].display_name
    //console.log('display name is '+news_type)
    const section_type_api_value = section_uri[news_type]
    //setSectionType(section_type_api_value)
    fetch_more(news_type)
    // more_message(news_type)


    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
    // Define a condition for mobile
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
    // console.log('data is '+data)
    //('capsules are '+ capsules)
    //console.log('index is '+params.index)
    //console.log('index is '+params['index'])
    return(
      <div className="trending-page-container">
     
    {  
    capsules && capsules.map(newsitem =>
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
                        {display_keywords}
                    </div>
                </div>   

                <div>
                    <div className="social-inline">
                        <SocialInline socaildata={newsitem.social} />
                    </div>
                </div>   
                {isDesktopOrTablet && 
                    <div className="headline-summary">
                        <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published}/>
                    </div>
                }
                { isMobile &&<div>
                    <div className="headline-summary">
                        <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published}/>
                    </div>
                </div>}
                
                
                
            {/* <Margin /> */}
    </div>
    {/* <hr className="horizontalline-partial hidden-mobile"/>  */}
    </>


    )}
    <div>
                    <div className="tending-page-more-news">
                    {more_message()}
                    </div>
                </div>   
    {  
        moreNews && moreNews.map(newsitem =>
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

                {/* <div>
                    <div className="trending-keyword-tending-page">
                        {newsitem.keywords}
                    </div>
                </div>    */}

                <div>
                    <div className="social-inline">
                        <SocialInline socaildata={newsitem.social} />
                    </div>
                </div>   
                {isDesktopOrTablet && 
                    <div className="headline-summary">
                        <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published}/>
                    </div>
                }
                { isMobile &&<div>
                    <div className="headline-summary">
                        <HeadLineSummary headlineObj={newsitem.headline} sumamryObj={newsitem.summary} published={newsitem.published}/>
                    </div>
                </div>}
                
                
                
            {/* <Margin /> */}
    </div>
    {/* <hr className="horizontalline-partial hidden-mobile"/>  */}
    </>


)}

{               isVisible && 
                    scroll_to_top()
                }
                
                {isDesktopOrTablet && <Footer />} 







      </div>
    )
}

export default TrendingPage