const repeatString = function(str, num) {
    let xStr = ''
    if (num >= 0) {
        for (i=0; i<num; i++) {
            xStr += str;
        }
    } else {
        xStr = 'ERROR'
    }
    
    return xStr;
};

// Do not edit below this line
module.exports = repeatString;
