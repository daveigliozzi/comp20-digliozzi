var xhr;

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

		}