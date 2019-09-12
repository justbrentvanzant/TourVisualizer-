//US Coordinates 
const startingLat = 37.0902;
const startingLon = 95.7129;
const mymap = L.map('mapid').setView([startingLon, startingLat], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoic2xpZ2h0bHlhdXRvbWF0aWMiLCJhIjoiY2swZ2JvYmx0MDJudzNtanNlNjd4OG82ZCJ9.P6_4sIbct_QzH8C69tMSow'
}).addTo(mymap);

let hasMap = false; 
let toursGroup;
let toursArray =[];


let updateMap = function(latArray, lonArray, titles, dates) {
	let numEntries = latArray.length;
	for (let i = 0; i < numEntries; i++){
		let newMarker = L.marker([latArray[i], lonArray[i]]).bindPopup(titles[i]+" @ "+dates[i]);
		toursArray.push(newMarker); 
	}
	toursGroup = L.layerGroup(toursArray);
	toursGroup.addTo(mymap);
	hasMap = true;
}

let clearMap = function() {
	if (hasMap == true) {
		hasMap = false; 
		 mymap.removeLayer(toursGroup);
	}
	
}