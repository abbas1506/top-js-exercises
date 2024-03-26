const reverseString = function(text) {
    reversedText = "";
    while (text!="") {
        reversedText += text.slice(-1);
        text = text.slice(0, -1);
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
