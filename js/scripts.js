$(document).ready(function(){
  $(".converter-form").submit(function(event){
    event.preventDefault();

    function convertToRN(number) {
      if (number >= 4000) {
        return NaN;
      } else {
        return number;
      }
    }









    var input = $("input#number").val();
    console.log(input);
    var result = convertToRN(input);
    $("#result").text(result);

  });
});
