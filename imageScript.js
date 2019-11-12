var imageNumber = 1;

function nextContentImage() {
    imageNumber++;

    if (imageNumber > 3 || imageNumber <= 0) {
        imageNumber = 1;
    }

    document.getElementById('contentImages').src = "images/travelimage" + imageNumber + ".jpg";
    contentImageText(imageNumber);
}

function previousContentImage() {
    imageNumber--;

    if (imageNumber < 1 || imageNumber >= 4) {
        imageNumber = 3;
    }

    document.getElementById('contentImages').src = "images/travelimage" + imageNumber + ".jpg";
    contentImageText(imageNumber);
}

function contentImageText(numberOfImage) {
    var headerText;
    var descriptionText;
    switch (numberOfImage) {
        case 1:
            headerText = "Get Away For The Weekend";
            descriptionText = "Hundreds of local destinations await!";
            break;
        case 2:
            headerText = "Visit Your Dream Destination";
            descriptionText = "Take the time for your dream vacation.";
            break;
        case 3:
            headerText = "Get Wet!";
            descriptionText = "Beach and coastal destinations around the world.";
            break;
    }
    document.getElementById('imageHeader').innerHTML = headerText;
    document.getElementById('imageDescription').innerHTML = descriptionText;
}