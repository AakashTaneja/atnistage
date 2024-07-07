import React from 'react';


function SearchInputMobile({searchQuery, placeHolderText, searchFired}){
    const [searchTerm, setSearchTerm] = React.useState('');
    //console.log('in SearchInput placeHolderText is ' + placeHolderText);
    const [currentPlaceholder, setCurrentPlaceholder] = React.useState(placeHolderText);

    const inputRef = React.useRef(null);

    // Watch for changes in props.placeholder
  React.useEffect(() => {
    setCurrentPlaceholder(placeHolderText);
    if (inputRef.current) {
        if (! searchFired){
            inputRef.current.focus();
        }
        
      }
  }, [placeHolderText]);

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
        if(searchTerm.trim() !== ''){
            try {
                //var searchAPIURL = searchAPIHost+ 'search?query=' + searchTerm
                // console.log('Enter key pressed with search term:', searchTerm);
                //console.log('search api url is '+searchAPIURL)
                // Example fetch call to a search API
                //const response = await fetch(searchAPIHost+ 'search?query=' + searchTerm);
                //const data = await response.json();
                //setSearchResults(data.results); // Adjust this according to your API response structure
                searchQuery(searchTerm.trim())
              } catch (error) {
                console.error('Error serching data:', error);
              }
        }
      
    }
  };


    return (
        <div className='search-input-mobile-container'>

            <input
                ref={inputRef}
                type="text"
                placeholder={currentPlaceholder}
                className = 'search-input-mobile'
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                />
            {/* <View
                    style={styles.menuTextUnderline}
            /> */}

        </div>

    );
}

export default SearchInputMobile;

    