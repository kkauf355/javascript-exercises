const reverseString = function(str) {
    let rev = "";
    for (i=0; i<str.length; i++) {
        rev += str[str.length - 1 - i];
    };
    return rev;
};
// conso`le.log(reverseString('hello'));
// Do not edit below this line
module.exports = reverseString;
