//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }

        if(compassHeading > 345 || compassHeading < 45) {
        text_area.textContent = "It is the cool breeze that stops by occasionally, but always surprising.";
        } 

        if(compassHeading >= 45 && compassHeading < 57) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 57 && compassHeading < 117) {  
        text_area.textContent = "Brightness bounces off the yellow ground and pierces my sights. My nose picks up the heated dusts, smell of dog days without sweat.";
        } 

        if(compassHeading >= 117 && compassHeading < 129) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 129 && compassHeading < 189) {
        text_area.textContent = "My shadow is gone. My hand is gon";
        }

        if(compassHeading >= 189 && compassHeading < 201) {
        text_area.textContent = compassHeading;
        }

        if(compassHeading >= 201 && compassHeading < 261) {
        text_area.textContent = "This very space, raining has a lot to do with moods, so";
        }

        if(compassHeading >= 261 && compassHeading < 273) {
        text_area.textContent = " \n ";
        }

        if(compassHeading >= 273 && compassHeading < 333) {
        text_area.textContent = "they shine for now";
        }

        if(compassHeading >= 333 && compassHeading < 345) {
        text_area.textContent = compassHeading;
        }


//"&& is and" "||" is or        
 
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


