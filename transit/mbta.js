
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
var lineData = JSON.parse('[{"Blue":"Blue","Wonderland":"Revere Beach","42.41342":42.40784254,"-70.991648":-70.99253321},{"Blue":"Blue","Wonderland":"Beachmont","42.41342":42.39754234,"-70.991648":-70.99231944},{"Blue":"Blue","Wonderland":"Suffolk Downs","42.41342":42.39050067,"-70.991648":-70.99712259},{"Blue":"Blue","Wonderland":"Orient Heights","42.41342":42.386867,"-70.991648":-71.004736},{"Blue":"Blue","Wonderland":"Wood Island","42.41342":42.3796403,"-70.991648":-71.02286539},{"Blue":"Blue","Wonderland":"Airport","42.41342":42.374262,"-70.991648":-71.030395},{"Blue":"Blue","Wonderland":"Maverick","42.41342":42.36911856,"-70.991648":-71.03952958},{"Blue":"Blue","Wonderland":"Aquarium","42.41342":42.359784,"-70.991648":-71.051652},{"Blue":"Blue","Wonderland":"State Street","42.41342":42.358978,"-70.991648":-71.057598},{"Blue":"Blue","Wonderland":"Government Center","42.41342":42.359705,"-70.991648":-71.059215},{"Blue":"Blue","Wonderland":"Bowdoin","42.41342":42.361365,"-70.991648":-71.062037},{"Blue":"Orange","Wonderland":"Oak Grove","42.41342":42.43668,"-70.991648":-71.071097},{"Blue":"Orange","Wonderland":"Malden Center","42.41342":42.426632,"-70.991648":-71.07411},{"Blue":"Orange","Wonderland":"Wellington","42.41342":42.40237,"-70.991648":-71.077082},{"Blue":"Orange","Wonderland":"Sullivan","42.41342":42.383975,"-70.991648":-71.076994},{"Blue":"Orange","Wonderland":"Community College","42.41342":42.373622,"-70.991648":-71.069533},{"Blue":"Orange","Wonderland":"North Station","42.41342":42.365577,"-70.991648":-71.06129},{"Blue":"Orange","Wonderland":"Haymarket","42.41342":42.363021,"-70.991648":-71.05829},{"Blue":"Orange","Wonderland":"State Street","42.41342":42.358978,"-70.991648":-71.057598},{"Blue":"Orange","Wonderland":"Downtown Crossing","42.41342":42.355518,"-70.991648":-71.060225},{"Blue":"Orange","Wonderland":"Chinatown","42.41342":42.352547,"-70.991648":-71.062752},{"Blue":"Orange","Wonderland":"Tufts Medical","42.41342":42.349662,"-70.991648":-71.063917},{"Blue":"Orange","Wonderland":"Back Bay","42.41342":42.34735,"-70.991648":-71.075727},{"Blue":"Orange","Wonderland":"Mass Ave","42.41342":42.341512,"-70.991648":-71.083423},{"Blue":"Orange","Wonderland":"Ruggles","42.41342":42.336377,"-70.991648":-71.088961},{"Blue":"Orange","Wonderland":"Roxbury Crossing","42.41342":42.331397,"-70.991648":-71.095451},{"Blue":"Orange","Wonderland":"Jackson Square","42.41342":42.323132,"-70.991648":-71.099592},{"Blue":"Orange","Wonderland":"Stony Brook","42.41342":42.317062,"-70.991648":-71.104248},{"Blue":"Orange","Wonderland":"Green Street","42.41342":42.310525,"-70.991648":-71.107414},{"Blue":"Orange","Wonderland":"Forest Hills","42.41342":42.300523,"-70.991648":-71.113686},{"Blue":"Red","Wonderland":"Alewife","42.41342":42.395428,"-70.991648":-71.142483},{"Blue":"Red","Wonderland":"Davis","42.41342":42.39674,"-70.991648":-71.121815},{"Blue":"Red","Wonderland":"Porter Square","42.41342":42.3884,"-70.991648":-71.119149},{"Blue":"Red","Wonderland":"Harvard Square","42.41342":42.373362,"-70.991648":-71.118956},{"Blue":"Red","Wonderland":"Central Square","42.41342":42.365486,"-70.991648":-71.103802},{"Blue":"Red","Wonderland":"Kendall/MIT","42.41342":42.36249079,"-70.991648":-71.08617653},{"Blue":"Red","Wonderland":"Charles/MGH","42.41342":42.361166,"-70.991648":-71.070628},{"Blue":"Red","Wonderland":"Park Street","42.41342":42.35639457,"-70.991648":-71.0624242},{"Blue":"Red","Wonderland":"Downtown Crossing","42.41342":42.355518,"-70.991648":-71.060225},{"Blue":"Red","Wonderland":"South Station","42.41342":42.352271,"-70.991648":-71.055242},{"Blue":"Red","Wonderland":"Broadway","42.41342":42.342622,"-70.991648":-71.056967},{"Blue":"Red","Wonderland":"Andrew","42.41342":42.330154,"-70.991648":-71.057655},{"Blue":"Red","Wonderland":"JFK/UMass","42.41342":42.320685,"-70.991648":-71.052391},{"Blue":"Red","Wonderland":"North Quincy","42.41342":42.275275,"-70.991648":-71.029583},{"Blue":"Red","Wonderland":"Wollaston","42.41342":42.2665139,"-70.991648":-71.0203369},{"Blue":"Red","Wonderland":"Quincy Center","42.41342":42.251809,"-70.991648":-71.005409},{"Blue":"Red","Wonderland":"Quincy Adams","42.41342":42.233391,"-70.991648":-71.007153},{"Blue":"Red","Wonderland":"Braintree","42.41342":42.2078543,"-70.991648":-71.0011385},{"Blue":"Red","Wonderland":"Savin Hill","42.41342":42.31129,"-70.991648":-71.053331},{"Blue":"Red","Wonderland":"Fields Corner","42.41342":42.300093,"-70.991648":-71.061667},{"Blue":"Red","Wonderland":"Shawmut","42.41342":42.29312583,"-70.991648":-71.06573796},{"Blue":"Red","Wonderland":"Ashmont","42.41342":42.284652,"-70.991648":-71.064489}]');
var scheduleData;
var path;

function init()
{
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();

	request.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);

	//handles the response
	request.onreadystatechange = dataReady;
	request.send(null); //Go! Execute!
}

function dataReady(){

	if(request.readyState == 4 && request.status == 200){
		scheduleData = JSON.parse(request.responseText);
	
	}
	else if(request.readyState == 4 && request.status == 500){
		alert("Uh Oh, Spaghetti-O");
	}

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

	scheduleData = JSON.parse(request.responseText);
	
	for(var i = 0; i < lineData.length; i++){
		if (scheduleData["line"].toLowerCase() == lineData[i]["line"].toLowerCase()){
			mark = new google.maps.Marker({
			position: new google.maps.LatLng(lineData[i]["latitude"], lineData[i]["longitude"]),
			title: lineData[i]["name"],
			icon: "flag1.png"
			});
			mark.setMap(map);

			google.maps.event.addListener(mark, 'click', function() {
			infowindow.setContent(mark.title);
			infowindow.open(map, mark);	
			});
			if(i<0)
			{
				var segment = [mark.position, new google.maps.LatLng(lineData[i-1]["latitude"], lineData[i-1]["longitude"])];
				path = new google.maps.Polyline({
					path: segment,
					strokeColor: "#FF0000",
					strokeOpacity: 1.0,
					strokeWeight: 2
				});
				path.setMap(map);
			}
		}
		
	}
}
