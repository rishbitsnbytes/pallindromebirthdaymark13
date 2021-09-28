var inputDob = document.querySelector("#inputDob");
var checkBtn = document.querySelector("#checkBtn");
var outputDiv = document.querySelector("#outputDiv");
var dateFormatsArry = [];

checkBtn.addEventListener("click", outputGif);

function outputGif() {
    if (inputDob.value === "") {
        outputDiv.innerHTML = "You forgot to enter the Date! Please enter the date🥸";
    } else {
        outputDiv.innerHTML = "<img src=\"https://media0.giphy.com/media/3o6Yg4GUVgIUg3bf7W/200.gif\" alt=\"Processing Gif\" height=\"200px\" width=\"400px\" >";
        setTimeout(checkBtnHandler, 5000);
    }
}

function checkBtnHandler() {
    var pallindromeAns = false;
    var currDate = inputDob.value;
    var returnArryPallindromeCheck = [];
    var returnArryDateInc = [];
    var dayCounter = 0;

    for (i = 0;; i++) {
        returnArryPallindromeCheck = pallindromeCheck(currDate);
        pallindromeAns = returnArryPallindromeCheck[0];
        currDate = returnArryPallindromeCheck[1];
        matchedDateFormat = returnArryPallindromeCheck[2];
        exactMatchedDate = returnArryPallindromeCheck[3];

        if (pallindromeAns && (dayCounter === 0)) {
            isPallindrome(currDate, matchedDateFormat, exactMatchedDate);
            break;
        } else {
            if (pallindromeAns) {
                currDate = currDate.toString();
                var yyyy = currDate.substring(0, 4);
                var mm = currDate.substring(4, 6);
                var dd = currDate.substring(6, 8);
                currDate = dd + "-" + mm + "-" + yyyy;
                var outputTextInc = "After " + "<b>" + dayCounter + "</b>" + " day(s) " + " on Date :- " + "<b>" + currDate + "</b>" + " matched with the format " + "<b>" + matchedDateFormat + "</b>" + " which is " + "<b>" + exactMatchedDate + "</b>";
                break;
            } else {
                returnArryDateInc = dateInc(currDate, dayCounter);
                currDate = returnArryDateInc[0];
                dayCounter = returnArryDateInc[1];
            }
        }
    }

    currDate = inputDob.value;
    dayCounter = 0;

    for (i = 0;; i++) {
        returnArryPallindromeCheck = pallindromeCheck(currDate);
        pallindromeAns = returnArryPallindromeCheck[0];
        currDate = returnArryPallindromeCheck[1];
        matchedDateFormat = returnArryPallindromeCheck[2];
        exactMatchedDate = returnArryPallindromeCheck[3];

        if (pallindromeAns && (dayCounter === 0)) {
            break;
        } else {
            if (pallindromeAns) {
                currDate = currDate.toString();
                var yyyy = currDate.substring(0, 4);
                var mm = currDate.substring(4, 6);
                var dd = currDate.substring(6, 8);
                currDate = dd + "-" + mm + "-" + yyyy;
                var outputTextDec = "Before " + "<b>" + dayCounter + "</b>" + " day(s) " + " on Date :- " + "<b>" + currDate + "</b>" + " matched with the format " + "<b>" + matchedDateFormat + "</b>" + " which is " + "<b>" + exactMatchedDate + "</b>";
                isNotAPallindrome(outputTextInc, outputTextDec);
                break;
            } else {
                returnArryDateInc = dateDec(currDate, dayCounter);
                currDate = returnArryDateInc[0];
                dayCounter = returnArryDateInc[1];
            }
        }
    }

}


function dateFormats(date) {
    var inputDobValue = new Date(date);
    var yyyy = (inputDobValue.getFullYear()).toString();
    var yy = (yyyy.toString()).slice(-2);
    var mm = ('0' + (inputDobValue.getMonth() + 1)).slice(-2);
    var dd = ('0' + inputDobValue.getDate()).slice(-2);
    var ddmmyyyy = dd + mm + yyyy;
    var mmddyyyy = mm + dd + yyyy;
    var yyyymmdd = yyyy + mm + dd;
    var ddmmyy = dd + mm + yy;
    var mmddyy = mm + dd + yy;
    var yymmdd = yy + mm + dd;
    var dateFormatsArry = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    return dateFormatsArry;
}


function pallindromeCheck(date) {
    var dateFormatsArry = dateFormats(date);
    var matchedDateFormatArry = ["DDMMYYYY", "MMDDYYYY", "YYYYMMDD", "DDMMYY", "MMDDYY", "YYMMDD"];
    var matchedDateFormat;
    var exactMatchedDate;
    var reverseDateArry = [];
    var pallindromeAns = false; // using as a binary, will be 1 if it's a pallindrome else 0
    var matchedDateFormat;

    for (i = 0; i < dateFormatsArry.length; i++) {
        reverseDateArry[i] = dateFormatsArry[i].split("").reverse().join("");
        if (reverseDateArry[i] == dateFormatsArry[i]) {
            pallindromeAns = true;
            matchedDateFormat = matchedDateFormatArry[i];
            exactMatchedDate = dateFormatsArry[i];
        }
    }
    return [pallindromeAns, dateFormatsArry[2], matchedDateFormat, exactMatchedDate]
}

function isPallindrome(currDate, matchedDateFormat, exactMatchedDate) {
    currDate = currDate.toString();
    var yyyy = currDate.substring(0, 4);
    var mm = currDate.substring(4, 6);
    var dd = currDate.substring(6, 8);
    currDate = dd + "-" + mm + "-" + yyyy;
    outputDiv.innerHTML = "Yay! 🎉 your birthday " + "<b>" + currDate + "</b>" + " is a Pallindrome matched with the format " + "<b>" + matchedDateFormat + "</b>" + " which is " + "<b>" + exactMatchedDate + "</b>";
}

function isNotAPallindrome(outputTextInc, outputTextDec) {
    outputDiv.innerHTML = "Sorry! your birthday is not a Palllindrome 🥺☹️ <br />  <br /> The nearest pallindromes to your birthday are following :- <br /> <br /> -->  " + outputTextInc + "<br />  -->  " + outputTextDec;
}

function checkLeapYr(year) {
    return ((((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)));
}


function dateInc(currDate, dayCounter) {
    var currDate = currDate.toString();
    var yyyy = Number(currDate.substring(0, 4));
    var mm = Number(currDate.substring(4, 6));
    var dd = Number(currDate.substring(6, 8));

    var leapYr = checkLeapYr(yyyy);

    if (mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) {

        dd += 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd > 31) {
            mm += 1;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm > 12) {
            yyyy += 1;
            mm = 01;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {

        dd += 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd > 30) {
            mm += 1;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm > 12) {
            yyyy += 1;
            mm = 01;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if ((mm == 2) && (!leapYr)) {
        dd += 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd > 28) {
            mm += 1;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm > 12) {
            yyyy += 1;
            mm = 01;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if ((mm == 2) && (leapYr)) {
        dd += 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd > 29) {
            mm += 1;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm > 12) {
            yyyy += 1;
            mm = 01;
            dd = 01;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

}


function dateDec(currDate, dayCounter) {
    var currDate = currDate.toString();
    var yyyy = Number(currDate.substring(0, 4));
    var mm = Number(currDate.substring(4, 6));
    var dd = Number(currDate.substring(6, 8));

    var leapYr = checkLeapYr(yyyy);

    if (mm == 1 || mm == 2 || mm == 4 || mm == 6 || mm == 8 || mm == 9 || mm == 11) {

        dd -= 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd < 1) {
            mm -= 1;
            dd = 31;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm < 1) {
            yyyy -= 1;
            mm = 12;
            dd = 31;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if (mm == 5 || mm == 7 || mm == 10 || mm == 12) {
        dd -= 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd < 1) {
            mm -= 1;
            dd = 30;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm < 1) {
            yyyy -= 1;
            mm = 12;
            dd = 31;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if ((mm == 3) && (!leapYr)) {
        dd -= 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd < 1) {
            mm -= 1;
            dd = 28;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm < 1) {
            yyyy -= 1;
            mm = 12;
            dd = 31;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }

    if ((mm == 3) && (leapYr)) {
        dd -= 1;
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        if (dd < 1) {
            mm -= 1;
            dd = 29;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        if (mm < 1) {
            yyyy += 1;
            mm = 12;
            dd = 31;
            currDate = (yyyy + "-" + mm + "-" + dd).toString();
        }
        var mm = ('0' + mm).slice(-2);
        var dd = ('0' + dd).slice(-2);
        currDate = (yyyy + "-" + mm + "-" + dd).toString();
        dayCounter += 1;
        return [currDate, dayCounter];
    }
}