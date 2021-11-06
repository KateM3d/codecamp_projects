// JavaScript Algorithms and Data Structures Projects: Caesars CipherPassed
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {
    let codeArr = [];
    for (let i = 0; i < str.length; i++) {
        codeArr.push(str.charCodeAt(i));
    }
    let decodeArr = codeArr.map(function(code) {
        if (code >= 65 && code <= 77) {
            return code + 13;
        } else if (code >= 78 && code <= 90) {
            return code - 13;
        } else if (code < 65) {
            return code;
        }
    });
    return String.fromCharCode(...decodeArr);
}
rot13("SERR PBQR PNZC");