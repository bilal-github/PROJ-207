$(document).ready(function() {
 // $("header").append("<hr>");
  var navBarHTML =
    '<nav class="navbar navbar-expand-md bg-dark navbar-dark">\
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
  $("section").append(navBarHTML);
});
