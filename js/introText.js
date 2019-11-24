
/**
 * 
 * @param {string} textID the id of the element to change
 * @param {*} text to be inserted into the element
 * @param {*} milliseconds ms between the typing of each charactor
 * @param {*} mirrorID is a second id which to type to
 */
function textTyping(textID, text, milliseconds) {
    var counter = 0;
    var timer = setInterval(() => {
        if (counter < text.length) {
            document.getElementById(textID).innerHTML += text.charAt(counter);
        }
        else {
            clearInterval(timer);
        }
        counter++;
    }, milliseconds);
}

function blinkingCursor(id, milliseconds) {
    var localMilliseconds = 350;
    var millisecondsPassed = 0;

    var timer = setInterval(() => {
        millisecondsPassed += localMilliseconds;

        if (millisecondsPassed > milliseconds) {
            clearInterval(timer);
            document.getElementById(id).innerHTML = "&nbsp;";
        }
        else if (document.getElementById(id).innerHTML != "|") {
            document.getElementById(id).innerHTML = "|";
        }
        else {
            document.getElementById(id).innerHTML = "&nbsp;";
        }
    }, localMilliseconds);
}
function startTyping() {
    textTyping("introText1", "'Live life with no excuses, ", 75);
    setTimeout(() => { textTyping("introText1", "travel with no regrets.'", 75); }, 3000);
    document.getElementById("btnDiscover").style.opacity = "1.0";
    document.getElementById("btnDiscover").style.marginTop = "90px";
}
