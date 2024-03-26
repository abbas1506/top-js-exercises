const removeFromArray = function(array, ...elementToRemove) {
    return (array.filter((element) => !elementToRemove.includes(element)));
};

// Do not edit below this line
module.exports = removeFromArray;
