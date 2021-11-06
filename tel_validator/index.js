// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
    if (/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)) {
        return true;
    } else if (/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
        return true;
    } else if (/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
        return true;
    } else return false;
}
telephoneCheck("555-555-5555");