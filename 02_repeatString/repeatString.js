const repeatString = function(text, num) {
    let finalString = "";
    if (num <0) return "ERROR";
    for (i=0; i<num; i++) {
        finalString += text;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
