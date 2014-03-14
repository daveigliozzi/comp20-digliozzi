
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

function init()
{
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();

	request.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

	//handles the response
	request.onreadystatechange = dataReady;
	request.send(null); //Go! Execute!
}
function dataReady()
{

	if(request.readyState == 4 && request.status == 200){
		scheduleData = JSON.parse(request.responseText);
	
	}
	else if(request.readyState == 4 && request.status == 500){
		console.log("Uh Oh, Spaghetti-O");
	}

}