//app.js

let defaultSearch = "Twenty One Pilots";

let getTourInfo = function(userInputString) {
	clearMap();
	setCurrentArtist(userInputString);
	manageRequest(updateMap);
}

getTourInfo(defaultSearch);