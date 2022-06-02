// const userInput = ("What is the temperature in Celsius?");

// function convertToFa(temp) {
//   let conversion = (temp * 9) / 5 + 32;
//   alert("the temp is " + conversion + "°F");
// }

// convertToFa(userInput);


// Business Logic
function volumeEquation (number1) {
  let conversion =  number1 * 3.785412;
  return conversion;
};

//UI LOGIC
$(document).ready(function() {
  
  $("form#volumeForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("#volumeInput").val();
    let volumeOutput = volumeEquation(userInput);
    $(".volumeOutput").text(volumeOutput);
  }); 
});



