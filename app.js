//app.js
//var searchButton = document.getElementById(mainButton);
//var searchText = document.getElementById(searchText);

//data variables
var bandName = "";
var amountResults = 0;

var defaultSearch = "Twenty One Pilots";

var getTourInfo = function(userInputString) {
	clearMap();
	setCurrentArtist(userInputString);
	manageRequest(updateMap);
}

getTourInfo(defaultSearch);
var updateStatus = function(){
	bandName = currentArtistSearchTerm;
	amountResults = toursArray.length;
	bandSlot.innerHTML = bandName;
	resultsSlot.innerHTML = amountResults;
}
/*
searchButton.onclick = function(){
	console.log(searchText.value);
	if (searchText.value = ""){
		getTourInfo(defaultSearch);
	}
	else {
		getTourInfo(searchText.value);
	}

}
*/
var number = document.getElementById("number");  
var callNumber = document.getElementById("callNumber");  

var bandSlot = document.getElementById("bandName");  
var resultsSlot = document.getElementById("resultsNumber");  

callNumber.onclick = function(){
	currentArtist = number.value;
	var val = number.value;
	if (val != "") {
		getTourInfo(val);
	}
	number.value = "";
}