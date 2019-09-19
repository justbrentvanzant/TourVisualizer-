//app.js
//var searchButton = document.getElementById(mainButton);
//var searchText = document.getElementById(searchText);

//data variables
var bandName = "";
var amountResults = 0;
var artistArray = [];
artistArray[0] = 'Post Malone';
artistArray[1] = 'Taylor Swift';
artistArray[2] = 'Billie Eilish';
artistArray[3] = 'Lizzo';
artistArray[4] = 'Khalid';
artistArray[5] = 'Tool';
artistArray[6] = 'Ed Sheeran';
artistArray[7] = 'Camila Cabello';
artistArray[8] = 'Shawn Mendes';
artistArray[9] = 'Melanie Martinez';
artistArray[10] = 'Drake';
artistArray[11] = 'Lil Tecca';
artistArray[12] = 'Luke Combs';
artistArray[13] = 'Jonas Brothers';
artistArray[14] = 'BTS';
artistArray[15] = 'The Highwomen';
artistArray[16] = 'Lil Nas X';
artistArray[17] = 'DaBaby';
artistArray[18] = 'Ariana Grande';
artistArray[19] = 'Lewis Capaldi';
artistArray[20] = 'Young Thug';
artistArray[21] = 'Travis Scott';
artistArray[22] = 'Imagine Dragons';
artistArray[23] = 'Queen';
artistArray[24] = 'Lana Del Rey';
artistArray[25] = 'Cardi B';
artistArray[26] = 'Chris Brown';
artistArray[27] = 'Lil Baby';
artistArray[28] = 'Dan + Shay';
artistArray[29] = 'Panic! At The Disco';
artistArray[30] = 'Halsey';
artistArray[31] = 'Sam Smith';
artistArray[32] = 'Kane Brown';
artistArray[33] = 'Lindsey Stirling';
artistArray[34] = 'XXXTENTACION';
artistArray[35] = 'Jason Aldean';
artistArray[36] = 'Justin Bieber';
artistArray[37] = 'Lauren Daigle';
artistArray[38] = 'OneRepublic';
artistArray[39] = 'Luke Bryan';
artistArray[40] = 'Normani';
artistArray[41] = 'NF';
artistArray[42] = '5 Seconds Of Summer';
artistArray[43] = 'Bruno Mars';
artistArray[44] = 'P!nk';
artistArray[45] = 'Blake Shelton';
artistArray[46] = 'Megan Thee Stallion';
artistArray[47] = 'Bad Bunny';
artistArray[48] = 'Home Free';
artistArray[49] = 'Marshmello';
artistArray[50] = 'Thomas Rhett';
artistArray[51] = 'Juice WRLD';
artistArray[52] = 'J. Cole';
artistArray[53] = 'Blanco Brown';
artistArray[54] = 'Saweetie';
artistArray[55] = 'Carrie Underwood';
artistArray[56] = 'J Balvin';
artistArray[57] = 'SHAED';
artistArray[58] = 'Sheryl Crow';
artistArray[59] = 'Swae Lee';
artistArray[60] = 'Morgan Wallen';
artistArray[61] = 'Eminem';
artistArray[62] = 'Elton John';
artistArray[63] = 'Polo G';
artistArray[64] = 'Maren Morris';
artistArray[65] = 'twenty one pilots';
artistArray[66] = 'Meek Mill';
artistArray[67] = 'Maroon 5';
artistArray[68] = 'Kelsea Ballerini';
artistArray[69] = 'Dierks Bentley';
artistArray[70] = 'A Boogie Wit da Hoodie';
artistArray[71] = 'Lady Gaga';
artistArray[72] = 'Chris Lane';
artistArray[73] = 'Chris Stapleton';
artistArray[74] = 'Old Dominion';
artistArray[75] = 'Gunna';
artistArray[76] = 'Michael Jackson';
artistArray[77] = 'Rick Ross';
artistArray[78] = 'Miley Cyrus';
artistArray[79] = 'The Chainsmokers';
artistArray[80] = 'Justin Moore';
artistArray[81] = 'Lil Tjay';
artistArray[82] = 'Katy Perry';
artistArray[83] = 'The Beatles';
artistArray[84] = 'Mustard';
artistArray[85] = 'YoungBoy Never Broke Again';
artistArray[86] = 'Anuel AA';
artistArray[87] = 'Daddy Yankee';
artistArray[88] = 'Florida Georgia Line';
artistArray[89] = 'Lynyrd Skynyrd';
artistArray[90] = 'Ozuna';
artistArray[91] = 'Bazzi';
artistArray[92] = 'Matt Stell';
artistArray[93] = 'Creedence Clearwater Revival';
artistArray[94] = 'Sleeping With Sirens';
artistArray[95] = 'NLE Choppa';
artistArray[96] = 'Nicki Minaj';
artistArray[97] = 'Ella Mai';
artistArray[98] = 'Ava Max';
artistArray[99] = 'Adele';

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
	if (checkTop(bandName)!=-1){
		bandSlot.innerHTML = bandName;
	}
	else {
		var newString = bandName+"( Weekly Ranking: "+checkTop(bandName)+")";
		bandSlot.innerHTML = bandName;
	}
	
	resultsSlot.innerHTML = amountResults;
}

var checkTop = function(inputString){
	for (var i = 0; i < artistArray.length; i++) {
		if (artistArray[i] == inputString) {
			return i+1;
		}
	}
	return -1;
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