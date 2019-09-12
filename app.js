//app.js

let defaultSearch = "Panic At the DiSCo";

let getTourInfo = function(userInputString) {
	clearMap();
	setCurrentArtist(userInputString);
	manageRequest(updateMap);
}

getTourInfo(defaultSearch);