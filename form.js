
$(document).ready(function(){

 $(".toprow").click(function() { //function changes big image when user clicks.
			var newSrc = this.id + ".jpg";
            console.log("this.id=" + this.id);  
            console.log("newSrc=" + newSrc);    
        
		$('#big').attr('src', newSrc);   
        });


 
     $(".midrow").hover(function() {//function changes big image when user hovers over a image.
			var newSrc = this.id + ".jpg";
			$('#big').attr('src', newSrc);},
                       
			function() {     //function returns the original image after user hovers off a image.
			$('#big').attr('src', "10.jpg");
        });

$(".finrow").mouseover(function() { //function changes big image when user hovers over a image.
			var newSrc = this.id + ".jpg";
			$('#big').attr('src', newSrc)
               
});

  
    });

  
 
 
 
function eventOne(){ //function creates a popup when clicked.

alert("Date: 2/27/15  Location: Studio 54 Greenville, SC  Event: Another Round party with performances by Numbergang.");

}

function eventTwo(){ //function creates a popup when clicked.
  alert("Date: 10/25/15 Location: Universal Events in Spartanburg SC  Event: Mixtape Release party with Numbergang performing songs off of their mixtape.");
  
  }

function eventThree(){ //function creates a popup when clicked.

alert("Date: 10/10/15 Location: Retro Cinemas in Forest City, NC  Event: Make Yo City Proud Tour with performances by Numbergang and other local performers.");

}

function eventFour(){ //function creates a popup when clicked.

alert("Date: 9/27/15 Location: Club Maze in Spartanburg, SC  Event: Rapper Young Thug performing with Numbergang.");

}

function eventFive(){ //function creates a popup when clicked.

alert("Date: 7/4/15 Location: Gravy's Grill in Spartanburg, SC  Event: Rapper Johnny Cinco performing with Numbergang.");

}

function eventSix(){ //function creates a popup when clicked.

alert("Date: 9/27/15 Location: Club Maze in Spartanburg, SC  Event: Rapppers Young Thug and Nephew 100 performing with features from Numbergang throughout the show.");

}

function eventSeven(){ //function creates a popup when clicked.

alert("Date: 2/18/15 Location: Asheville Music Hall in Asheville, NC  Event: Numbergang performs.");
}

function eventEight(){ //function creates a popup when clicked.

alert("Date: 7/5/15 Location: Fairgrounds in Spartanburg, SC  Event: Rap group Migos perform at Carolina Stunt Fest (car & bike show) with a few performances by Numbergang.");

}

function eventNine(){ //function creates a popup when clicked.

alert("Date: 1/20/15 Location: Universal Events in Roebuck, SC  Event: Rapper Future performs with brief performances by Numbergang in the show.");

}



function inform(){//Function alerts the user of how to interact with page.

alert("Click on the first row of images to enlarge the picture. Hover/Move mouse over the second and last row of images to enlarge the picture. ");

}

function informOne(){//Function alerts the user of how to interact with page.

alert("Click on the videos to play them. More videos can be found on the Youtube page link on the Subscribe page. ");

}



function videoPlay(){ //plays videos when they are clicked.

var myPlay = document.getElementsByClassName('topvid');
myPlay.videoPlay();
}
function stopVideo(){
var myPlay = document.getElementsByClassName('topvid');
myPlay.stopVideo();


var myPlay = document.getElementsByClassName('midvid');
myPlay.videoPlay();
}
function stopVideo(){
var myPlay = document.getElementsByClassName('midvid');
myPlay.stopVideo();


var myPlay = document.getElementsByClassName('botvid');
myPlay.videoPlay();
}
function stopVideo(){
var myPlay = document.getElementsByClassName('botvid');
myPlay.stopVideo();

}



$(function autoPlay(){
  $("videoOne").hover(function(){
    $(this).css("opacity","1");
    this.videoplay();
    },function stopPlay(){
    $(this).css("opacity",".3");
   this.stopvideo()
  });
});





window.onload = function(){

var submitNow = document.getElementById("submitButton");
    submitNow.onclick = submit;

    }



        function submit()//Function allows the user to submit info and alerts the user when input is incorrect.
        {
    var firstName = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    console.log(firstName + " " + lastName + " " + email);
    console.log(email.indexOf("@"));
    if (firstName === "") {
        alert("please provide a first name");
    } else if (lastName === "") {
        alert("please provide a last name");
    } else if (email ==="" || email.indexOf("@") < 0) {
        alert("please provide a valid email");
    } 
    else  {
    alert("You have successfully subscribed Thank You!!");
    
}
}




