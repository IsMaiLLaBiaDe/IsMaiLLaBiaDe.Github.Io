<!DOCTYPE html>
<html>
<head>
<title>Enrole</title>
</head>
<body>
<!DOCTYPE html>
<html>
<head>
<title>i - L</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="농업 보조원,카페 도우미,운전 보조원,공장 조수,통화 도우미,">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
body, html {
  height: 100%;
  color: #777;
  line-height: 1.8;
}

.w3-image {
  max-width: 100%;
  height: auto;
}
.w3-th{
 width: 100%;
 padding: 0 8px;
 padding-top: 25px;
 padding-bottom: 25px;
 float: left;
 width: 25%; 
  }
  
/* Create a Parallax Effect */
.bgimg-1, .bgimg-2, .bgimg-3 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* First image (Logo. Full height) */
.bgimg-1 {
  background-image: url('job.jpg');
  min-height: 100%;
}

/* Second image (Portfolio) */
.bgimg-2 {
  background-image: url("https://www.w3schools.com/w3images/parallax2.jpg");
  min-height: 400px;
}

/* Third image (Contact) */
.bgimg-3 {
  background-image: url("bg.png");
  min-height: 400px;
}

.w3-wide {letter-spacing: 10px;}
.w3-hover-opacity {cursor: pointer;}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1600px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
    min-height: 400px;
  }
}
</style>
</head>
<body>




<!-- Navbar (sit on top) --> 
<div  class="w3-top">
  <div class="w3-bar" id="myNavbar">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <a style="color: #0047A0 ;" href="#Home" class="w3-bar-item w3-button"><i class="fa fa-home"></i>HOME</a>
    <a style="color: #0047A0 ;" href="#About" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i>ABOUT</a>
    <a style="color: #0047A0 ;" href="#Skills" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i>SKILLS</a>
    <a style="color: #0047A0 ;" href="#Contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i>CONTACT</a>
    <a style="color: #0047A0 ;" onclick ="Search()" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
      <i class="fa fa-search"></i>
    </a>
	   <a  style="color: #0047A0 !important;" href ="kr/" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
      <i class="fa fa-language"></i>
    </a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
    <a href="#About" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
    <a href="#Skills" class="w3-bar-item w3-button" onclick="toggleFunction()">SKILLS</a>
    <a href="#Contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
    <a onclick ="Search()" class="w3-bar-item w3-button">SEARCH</a>
  </div>
</div>

<!-- Container (Portfolio Section) -->



  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div  class="w3-row-padding w3-center"> </div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Third Parallax Image with Portfolio Text -->
<center><div  style="margin:30px" class="bgimgg-3 w3-display-container w3-opacity-min">
  <div style="margin-top: 40px;" class="w3-display-middle">
     <span  class="w3-xxlarge w3-text-black w3-wide">CONTACT</span>
  </div>
</div>

<!-- Container (Contact Section) -->
<div class="w3-content w3-container w3-padding-64" id="Contact">
  <h3 class="w3-center"></h3>
  <p class="w3-center"><em>I'd love your feedback!</em></p>

  <div class="w3-row w3-padding-32 w3-section">
    <div class="w3-col m4 w3-container">
      <img src="A.png" class="w3-image w3-round" style="width:100%">
    </div>
    <div class="w3-col m8 w3-panel">
      <div class="w3-large w3-margin-bottom">
	    <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>Email: i4Lx8D@Gmail.Com<br>
        <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>Seoul, KR<br>
        <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i>Phone: +000000000 <br>
        
      
      </div>
      <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
      <form  action="https://polyadpribose.000webhostapp.com/Contact.php" method="Post"target="_blank">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input style="box-shadow: 2px 2px 2px;" class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
          </div>
          <div class="w3-half">
            <input style="box-shadow: 2px 2px 2px;" class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
          </div>
        </div>
        <input style="box-shadow: 2px 2px 2px;" class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
    <center> <button  style="background-color:  #0047A0 !important;opacity: 90%;border-radius: 90px;color: white;box-shadow: 2px 2px 2px;"  class="w3-button w3-black w3-section" type="submit">
          <i class="fa fa-paper-plane"></i>  Send Message   
        </button></center>
      </form>
    </div>
  </div>
</div>
  <script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>
  <script>
function Search() {
  location.replace("https://www.google.com/search?q=IsMaiL+LaBiaDe")
}
</script>

</div>
  

<!-- Footer -->
<footer  style="background-color: #00469e !important;" class="w3-center w3-black w3-padding-64">
  <a href="#Home" class=""><i class="fa fa-chevron-up w3-margin-right"></i></a>
  <div class="w3-xlarge w3-section">
   <a href="https://www.facebook.com/profile.php?id=61555042454154" > <i class="fa fa-facebook-official w3-hover-opacity"></i></a>
    <a href="https://instagram.com/IsMaiLLaBiaDe"> <i class="fa fa-instagram w3-hover-opacity"></i></a>
    <a href="https://twitter.com/IsMaiLLaBiaDe"> <i class="fa fa-twitter w3-hover-opacity"></i></a>
  </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
</footer>
 
</body>
</html>

</body>
</html>

