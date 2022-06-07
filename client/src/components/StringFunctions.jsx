function findNewsPubName(props){
    // newsURL will be passed, find news publication name like indiatvnews, ndtv etc
    var indexofwww = props.indexOf("www.");
    var startPos = 0;
    var endsPos = props.indexOf(".com");
    if(indexofwww === -1){
        var indexofhttps = props.indexOf("https://");
        startPos = indexofhttps + 8;

    }else{
        startPos = indexofwww + 4;
    }

    if(endsPos === -1){
        endsPos = props.indexOf(".in/");
    }
    
    //console.log("returning site name as "+startPos+" and "+endsPos+" "+props.substring(startPos, endsPos));
    return props.substring(startPos, endsPos);

}

function subStringToMax(props){
    if(props.string.length > props.maxLength){
        console.log("cutting it ");
        return props.string.subString(0, props.maxLength);
    }
    else{
        return props.string
    }
}

export {
    findNewsPubName,
    subStringToMax
  }