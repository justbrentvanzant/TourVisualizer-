//US Coordinates 
const startingLat = 38.007;
const startingLon = -95.844;
const mymap = L.map('mapid').setView([startingLat, startingLon], 5);
L.tileLayer('https://api.mapbox.com/styles/v1/slightlyautomatic/ck0hnf4dd1rur1dn2zwggv2af/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoic2xpZ2h0bHlhdXRvbWF0aWMiLCJhIjoiY2swZ2JvYmx0MDJudzNtanNlNjd4OG82ZCJ9.P6_4sIbct_QzH8C69tMSow'
}).addTo(mymap);

let hasMap = false; 
let toursGroup;
let toursArray =[];



let updateMap = function(latArray, lonArray, titles, dates) {
	toursArray =[];
	let numEntries = latArray.length;
	for (let i = 0; i < numEntries; i++){
		let newMarker = L.marker([latArray[i], lonArray[i]]).bindPopup("<b>"+titles[i]+"</b>"+" on "+dates[i].substring(0, 10));
		toursArray.push(newMarker); 
	}
	toursGroup = L.layerGroup(toursArray);
	toursGroup.addTo(mymap);
	hasMap = true;
	updateStatus();
}

let clearMap = function() {
	if (hasMap == true) {
		hasMap = false; 
		 mymap.removeLayer(toursGroup);
	}
	
}