/**
 * DATE: Nov 19, 2019
 * COURSE: CPRG-210-OSD
 * ASSIGNMENT: Day 1 - 7 Exercises
 * 
 * @author Brian Appleton
 * @description Used to dynamically load images to the webpage and navigate between those images.
 */

/**@description tracks the current index of the images being displayed */
var selectedImageNumber = -1;

/**@description provides the image preloader a reference for how many images to load*/
const totalImageCount = 2;

/**@description an array used to store images */
var images = [];

/**@description description of the image being displayed */
var imageDescription = [
    "Hundreds of local destinations await!",
    "Take the time for your dream vacation.",
    "Beach and coastal destinations around the world."
];

/**@description Header/Title of the image being displayed */
var imageHeader = [
    "Get Wet!",
    "Get Away For The Weekend",
    "Visit Your Dream Destination"
];

/**
 * @descript preloads the content images to an array
 */
function preloadImages() {

    for (var x = 1; x <= totalImageCount; x++) {
        images.push(
            new Image().src = "./images/indexSlide" + x + ".jpg");
    }
}

/**
 * @description changes to the next image in the array
 */
function nextImage() {
    selectedImageNumber++;

    if (selectedImageNumber >= images.length || selectedImageNumber < 0) {
        selectedImageNumber = 0
    }
    //document.getElementById("imageSlide").style.backgroundImage = "url(" + images[selectedImageNumber] + ")";
    document.getElementById("imageSlide").src= images[selectedImageNumber];

    //  $('.imageHeader').html(imageHeader[selectedImageNumber]);
    // $('.imageDescription').html(imageDescription[selectedImageNumber]);
}

/**
 * @description changes to the previous image in the array
 */
function previousImage() {
    selectedImageNumber--;

    if (selectedImageNumber < 0 || selectedImageNumber >= images.length) {
        selectedImageNumber = totalImageCount - 1;
    }

    document.getElementById("imageSlide").style.backgroundImage = "url(" + images[selectedImageNumber] + ")";

    // $('.imageHeader').html(imageHeader[selectedImageNumber]);
    //  $('.imageDescription').html(imageDescription[selectedImageNumber]);
}