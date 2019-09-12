//current artist tracker
let currentArtist ="Twenty One Pilots";
let currentArtistSearchTerm = "";
//data arrays
let currentLocationLats = [];
let currentLocationLons = [];
let currentLocationTitles = [];
let currentLocationTime = [];

//sets the current artist
let setCurrentArtist = function(inputString){
	currentArtist = inputString
}
let setCurrentArtistSearchTern = function(inputString){
	currentArtistSearchTerm = inputString
}
let getCurrentArtist = function(){
	return currentArtistSearchTerm
}

let cleanInput = function(inputString){
	let cleanedStrings = inputString.toLowerCase().split(" ");
	let resultString = "";
	for (let i = 0; i < cleanedStrings.length; i++ ){
		if (i != 0) {
			resultString+="-";
		}
		resultString+=cleanedStrings[i];
	}
	return resultString;
}
let searchBand = function(bandName) {
	return bandString = cleanInput(bandName);	
}

let manageRequest = function(cb){
	const baseURL = 'https://api.seatgeek.com/2/events?performers.slug='; // Get 10 random users
	const clientString = '&per_page=100&client_id=MTgzNjYzMjF8MTU2ODI1NTkzNS41OA';
	let bandString = searchBand(currentArtist);
	currentArtistSearchTerm = bandString;

	let reqString = baseURL+bandString+clientString;
	console.log(reqString)
	fetch(reqString) // Call the fetch function passing the url of the API as a parameter
		 .then(function(response) {
	   		 return response.json();
		 })
	 	 .then(function(myJson) {
	 	 	//loop through events and obtain relevant data
	  		  for (let i=0; i < myJson.events.length; i++) {
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
