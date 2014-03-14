for(var i = 0; i < lineData.length; i++)
	{

		//var markerArray[];

		if (scheduleData["line"].toLowerCase() == lineData[i]["line"].toLowerCase())
		{		
		if(lineData[i]["line"] == "Blue")
		{
			mark = new google.maps.Marker({
			position: new google.maps.LatLng(lineData[i]["latitude"], lineData[i]["longitude"]),
			title: lineData[i]["name"]
			});
			mark.setMap(map);

			google.maps.event.addListener(mark, 'click', function() {
			infowindow.setContent(mark.title);
			infowindow.open(map, mark);	
			});


			if(i > 0 && lineData[i]["line"] == lineData[i-1]["line"]){


				var segment = [mark.position, new google.maps.LatLng(lineData[i-1]["latitude"], lineData[i-1]["longitude"])];
				path = new google.maps.Polyline({
				path: segment,
				strokeColor: "#0000FF",
				strokeOpacity: 1.0,
				strokeWeight: 2
				});
				path.setMap(map);
			}
		}

		if(lineData[i]["line"] == "Red")
		{
			mark = new google.maps.Marker({
			position: new google.maps.LatLng(lineData[i]["latitude"], lineData[i]["longitude"]),
			title: lineData[i]["name"],
			//icon: "flag1.png"
			});
			mark.setMap(map);

			google.maps.event.addListener(mark, 'click', function() {
			infowindow.setContent(mark.title);
			infowindow.open(map, mark);	
			});
			if(lineData[i]["name"] == "Savin Hill"){
				var segment = [mark.position, new google.maps.LatLng(42.320685, -71.052391)];
				path = new google.maps.Polyline({
				path: segment,
				strokeColor: "#FF0000",
				strokeOpacity: 1.0,
				strokeWeight: 2
				});
				path.setMap(map);

			}
			else if (i > 0 && lineData[i]["line"] == lineData[i-1]["line"])
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

		else (lineData[i]["line"] == "Orange")
		{

			var mark;
			mark = new google.maps.Marker({
			position: new google.maps.LatLng(lineData[i]["latitude"], lineData[i]["longitude"]),
			title: lineData[i]["name"]
			});
			mark.setMap(map);

			google.maps.event.addListener(mark, 'click', function() {
			infowindow.setContent(mark.title);
			infowindow.open(map, mark);	
			});
			if(i > 0 && lineData[i]["line"] == lineData[i-1]["line"]){
				var segment = [mark.position, new google.maps.LatLng(lineData[i-1]["latitude"], lineData[i-1]["longitude"])];
				path = new google.maps.Polyline({
				path: segment,
				strokeColor: "#FF6600",
				strokeOpacity: 1.0,
				strokeWeight: 2
				});
				path.setMap(map);
			}
		}
		}
	}