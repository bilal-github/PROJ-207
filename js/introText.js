
/**
 * 
 * @param {String} id the id of the element to change
 * @param {String} text to be inserted into the element
 * @param {String} milliseconds ms between displaying the next character in the given string
 * @param {String} mirrorID is a second id which to type to
 * @param {Function} callback is a method that is called when the function has completed displaying the text parameter
 * @param {Function} callbackParam1 paramter for callback
 * * @param {Function} callbackParam2 paramter for callback
 * @description a string is displayed on the screen one charactor at a time which creates a typing effect
 */
function textTyping(id, text, milliseconds, callback, callbackParam1,callbackParam2) {
    var intervalCounter = 0;
    
    var timer = setInterval(() => {
        if (intervalCounter < text.length) {
            document.getElementById(id).innerHTML += text.charAt(intervalCounter);
            intervalCounter++;
        }
        else {
            if (callback != undefined) {
                callback(callbackParam1,callbackParam2);
            }
            clearInterval(timer);
        }
    }, milliseconds);
}
/**
 * 
 * @param {String} the id of the element where the blinking cursor will appear
 * @param {String} runTime length of time in milliseconds the function lasts
 */
function blinkingCursor(id, runTime) {
    var localMilliseconds = 350;
    var millisecondsPassed = 0;

    var timer = setInterval(() => {
        millisecondsPassed += localMilliseconds;
        
        //current interval is the last, stop the timer and set string field to BLANK
        if (millisecondsPassed > runTime) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = "&nbsp;";
        }
        //curent interval is NOT the last proceed with alternative between string charactors
        else if (document.getElementById(id).innerHTML != "|") {
            document.getElementById(id).innerHTML = "|";
        }
        else {
            document.getElementById(id).innerHTML = "&nbsp;";
        }
    }, localMilliseconds);
}
/**
 * 
 */

