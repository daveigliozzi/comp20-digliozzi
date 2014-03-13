/*var xhr;

function init() {
xhr = new XMLHttpRequest();
xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

//handles the response
xhr.onreadystatechange = dataReady;
xhr.send(null); //Go! Execute!

}

function dataReady(){
//console.log(xhr.readyState);
//ready state numbers
//0 = not initialized
//1 = set up
//2 = sent
//3 = in progress
//4 = complete

if(xhr.readyState == 4){
	scheduleData = JSON.parse(xhr.responseText);
	scheduleDom = document.getElementById("schedule");
	scheduleDom.innerHTML = scheduleData["line"];
}
else if(xhr.readyState == 4 && xhr.status == 500){
	scheduleDom = document.getElementById("schedule");
	schduleDom.innterHTML = '<p><img alt = "alternative picture for error" src= http://mavdig.com/images/blog_header/the-dude-abides-christian-broadbent.jpg </img></p>'
}



}*/

//From prof. Ming Chow's example

var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
			zoom: 13, // The larger the zoom number, the bigger the zoom
			center: me,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;

function init()
{
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
}

function getMyLocation()
{
	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

function renderMap()
{
	me = new google.maps.LatLng(myLat, myLng);
	
	// Update map and go there...
	map.panTo(me);

	// Create a marker
	marker = new google.maps.Marker({
		position: me,
		title: "Here I Am!"
	});
	marker.setMap(map);
		
	// Open info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});
	
	// Calling Google Places API
	var request = {
		location: me,
		radius: '500',
		types: ['food']
	};
	service = new google.maps.places.PlacesService(map);
	service.search(request, callback);
}

// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
function callback(results, status)
{
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		alert("Got places back!");
		places = results;
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
	}
}

function createMarker(place)
{
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.close();
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
}
