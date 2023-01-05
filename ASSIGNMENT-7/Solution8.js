let checkFirstChar = (str) => {
    if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
        console.log("First Character is lower case");
    }
    else {

        console.log("First Character is Upper case");
    }
}

checkFirstChar("abcdef");
checkFirstChar("ABcdef");