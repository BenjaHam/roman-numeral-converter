// Front end function
$(document).ready(function(){
  $(".converter-form").submit(function(event){
    // var result = convertToRN(input);
    event.preventDefault();
// toolbox
      var input = parseInt($("input#number").val());
      var userString = input.toString();
      console.log(userString);
      var thousands = ((userString.length) - 4);
      var hundreds = ((userString.length) - 3);
      var tens = ((userString.length) - 2);
      var ones = ((userString.length) - 1);
      var stringOutput = "";
// Back end function
    //convert first digit and add to string
    if (userString.charAt(thousands) == 1) {
      stringOutput = stringOutput + "M";
    } else if (userString.charAt(thousands) == 2) {
      stringOutput = stringOutput + "MM";
    } else if (userString.charAt(thousands) == 3) {
      stringOutput = stringOutput + "MMM";
    } else if (userString.charAt(thousands) >= 4){
      stringOutput = "Try again";
    }
    if (userString.charAt(hundreds) == 1) {
      stringOutput = stringOutput + "C";
    } else if (userString.charAt(hundreds) == 2) {
      stringOutput = stringOutput + "CC";
    } else if (userString.charAt(hundreds) == 3) {
      stringOutput = stringOutput + "CCC";
    } else if (userString.charAt(hundreds) == 4) {
      stringOutput = stringOutput + "CD";
    } else if (userString.charAt(hundreds) == 5) {
      stringOutput = stringOutput + "D";
    } else if (userString.charAt(hundreds) == 6) {
      stringOutput = stringOutput + "DC";
    } else if (userString.charAt(hundreds) == 7) {
      stringOutput = stringOutput + "DCC";
    } else if (userString.charAt(hundreds) == 8) {
      stringOutput = stringOutput + "DCCC";
    } else if (userString.charAt(hundreds) == 9) {
      stringOutput = stringOutput + "CM";
    }
    if (userString.charAt(tens) == 1) {
      stringOutput = stringOutput + "X";
    } else if (userString.charAt(tens) == 2) {
      stringOutput = stringOutput + "XX";
    } else if (userString.charAt(tens) == 3) {
      stringOutput = stringOutput + "XXX";
    } else if (userString.charAt(tens) == 4) {
      stringOutput = stringOutput + "XL";
    } else if (userString.charAt(tens) == 5) {
      stringOutput = stringOutput + "L";
    } else if (userString.charAt(tens) == 6) {
      stringOutput = stringOutput + "LX";
    } else if (userString.charAt(tens) == 7) {
      stringOutput = stringOutput + "LXX";
    } else if (userString.charAt(tens) == 8) {
      stringOutput = stringOutput + "LXXX";
    } else if (userString.charAt(tens) == 9) {
      stringOutput = stringOutput + "XC";
    }
    if (userString.charAt(ones) == 1) {
      stringOutput = stringOutput + "I";
    } else if (userString.charAt(ones) == 2) {
      stringOutput = stringOutput + "II";
    } else if (userString.charAt(ones) == 3) {
      stringOutput = stringOutput + "III";
    } else if (userString.charAt(ones) == 4) {
      stringOutput = stringOutput + "IV";
    } else if (userString.charAt(ones) == 5) {
      stringOutput = stringOutput + "V";
    } else if (userString.charAt(ones) == 6) {
      stringOutput = stringOutput + "VI";
    } else if (userString.charAt(ones) == 7) {
      stringOutput = stringOutput + "VII";
    } else if (userString.charAt(ones) == 8) {
      stringOutput = stringOutput + "VIII";
    } else if (userString.charAt(ones) == 9) {
      stringOutput = stringOutput + "IX";
    }
// Front end result area
  $("#result").text(stringOutput);
  });
});
