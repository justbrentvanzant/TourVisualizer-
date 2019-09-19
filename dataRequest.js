//current artist tracker
var currentArtist ="Twenty One Pilots";
var currentArtistSearchTerm = "";
//data arrays
var currentLocationLats = [];
var currentLocationLons = [];
var currentLocationTitles = [];
var currentLocationTime = [];

//sets the current artist
var setCurrentArtist = function(inputString){
	console.log("input:" + inputString);
	currentArtist = inputString;
	console.log("in hre:" + currentArtist);
}
var setCurrentArtistSearchTern = function(inputString){
	currentArtistSearchTerm = inputString;
}
var getCurrentArtist = function(){
	return currentArtistSearchTerm
}
var filterForQuery = function(inputString){
	var resultString = "";
	resultString = inputString.replace("-", "+");
	return resultString;
}

var cleanInput = function(inputString){
	var cleanedStrings = inputString.toLowerCase().split(" ");
	var resultString = "";
	for (var i = 0; i < cleanedStrings.length; i++ ){
		if (i != 0) {
			resultString+="-";
		}
		resultString+=cleanedStrings[i];
	}
	return resultString;
}
var searchBand = function(bandName) {
	return bandString = cleanInput(bandName);	
}

var manageRequest = function(cb){
	currentLocationLats = [];
	currentLocationLons = [];
	currentLocationTitles = [];
	currentLocationTime = [];
	const baseURL = 'https://api.seatgeek.com/2/events?performers.slug='; // Get 10 random users
	const clientString = '&per_page=100&client_id=MTgzNjYzMjF8MTU2ODI1NTkzNS41OA';
	var bandString = searchBand(currentArtist);
	currentArtistSearchTerm = bandString;
	var reqString = baseURL+bandString+clientString;
	fetch(reqString) // Call the fetch function passing the url of the API as a parameter
		 .then(function(response) {
	   		 return response.json();
		 })
	 	 .then(function(myJson) {
	 	 	//loop through events and obtain relevant data
	  		  for (var i=0; i < myJson.events.length; i++) {
	  		  	currentEvent = myJson.events[i];
	  			currentLocationTime[i] = currentEvent.datetime_local;
	  		  	currentLocationLats[i] = currentEvent.venue.location.lat;
	  		    currentLocationLons[i] = currentEvent.venue.location.lon;
				currentLocationTitles[i] = currentEvent.venue.name;
	  		  }
	  		  cb(currentLocationLats,currentLocationLons,currentLocationTitles,currentLocationTime);
		  })
		.catch(function() {
		    // This is where you run code if the server returns any errors
		});
}
