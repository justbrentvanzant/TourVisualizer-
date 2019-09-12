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

var manageRequest = function(){
	const baseURL = 'https://api.seatgeek.com/2/events?performers.slug='; // Get 10 random users
	const clientString = '&client_id=MTgzNjYzMjF8MTU2ODI1NTkzNS41OA';
	let bandString = searchBand("Twenty One Pilots");

	let reqString = baseURL+bandString+clientString;
	console.log(reqString)
	fetch(reqString) // Call the fetch function passing the url of the API as a parameter
		 .then(function(response) {
	   		 return response.json();
		 })
	 	 .then(function(myJson) {
	  		  console.log(JSON.stringify(myJson));
		  })
		.catch(function() {
		    // This is where you run code if the server returns any errors
		});
}
manageRequest();