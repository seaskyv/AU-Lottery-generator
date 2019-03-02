var config = require('../config')();

var host = config.API_location;
var API_location = config.API_URI;

function requestNum(game,magic,num,system){
    var aURI = host + API_location + "?game=" + game + "&magic=" + magic + "&num=" + num + "&system=" + system;
    console.log(aURI);
    var options= {
        uri : aURI,
        method : 'GET',
        json : true 
    }
    return(options)
   
}

module.exports = requestNum