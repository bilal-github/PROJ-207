/**
 * @description sends a GET request to retrieve Vacation Table Packages from the database. Requires the node.js use.get() function to retrieve data and send it back as a response.
 * @returns A callback function which contains the JSON format data.
 * 
 * 
 * @author Brian Appleton
 */
function getVacationTablePackages(callbackData) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "/getVacationPackages", true);
    xhr.send();
    
    xhr.onreadystatechange = processChanges;

    function processChanges() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var packagesObject = xhr.response;
            callbackData(packagesObject);
        }
    }
}
