$(document).ready(function() {
 // $("header").append("<hr>");
  var oldBarHTML =
    '<header id="header" class="justify-content-center py-2">\
    <a href="index.html">\
      <img class="logo" src="../images/travel_logo.png" alt="Travel Agency Logo"\
    /></a>\
    <h1 id="logoNameID"><label>Travel Experts</label></h1>\
    <br />\
  </header>\
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">\
    <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse"\
        data-target="#collapsibleNavbar">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar">\
        <ul class="navbar-nav">\
            <li class="nav-item">\
                <a class="nav-link" href="index.html">Home</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="Contact-details.html">Contact Us</a>\
            </li>\
            <li class="nav-item">\
            <li class="nav-item">\
                <a class="nav-link" href="Vacation.html">Vacation</a>\
            </li>\
                <a class="nav-link" href="CustomerRegistration-Copy.html">Register</a>\
            </li>\
        </ul>\
    </div>\
</nav>';
var navBarHTML =
    '<nav class="navbar navbar-expand-md bg-dark navbar-dark">\
    <button class="navbar-toggler justify-content-end" type="button" data-toggle="collapse"\
        data-target="#collapsibleNavbar">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    <div class="collapse navbar-collapse" id="collapsibleNavbar">\
        <div class="navbar-nav" width="100%">\
                <a class="nav-link" href="index.html">\
                <img src="plane.png">\
                Home</a>\
                <a class="nav-link" href="Contact-details.html">\
                <img src="card.png">\
                Contact Us</a>\
                <a class="nav-link" href="Vacation.html">\
                <img src="book.png">\
                Book Vacation</a>\
                <a class="nav-link" href="CustomerRegistration-Copy.html">\
                <img src="register.png">\
                Sign Up</a>\
        </div>\
    </div>\
</nav>';
  $("section").append(oldBarHTML);
});
