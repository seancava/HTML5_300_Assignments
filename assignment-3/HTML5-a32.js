$(document).ready(init);
function init(){

var submitButton = $("#submitEntry");
submitButton.on("click", addInput);

var userNumberEntries = [];
var userStringEntries = [];

function addInput(evt){
evt.preventDefault();
//$("form").reset();
var userEntry = $("#userInput").val();
parseInt(userEntry, 10);
if (isNaN(userEntry)){
userStringEntries.push(userEntry);
}
else{

userNumberEntries.push(userEntry);
}

var sum = 0; 
for (var i = 0; i < userNumberEntries.length; i++) {
sum += userNumberEntries[i] << 0;
}

$("#totalNumbers").html
("The total number of numbers entered is: " + userNumberEntries.length);
$("#sumNumbers").html
("The sum of numbers entered is: " + sum);
$("#averageNumbers").html
("The average of numbers entered is: " + sum / (userStringEntries.length));
$("#totalStrings").html
("The total number of strings entered is: " + userStringEntries.length);
$("#concatStrings").html("The strings concatenated is: " + userStringEntries.join(' '));

};//end addInput

var resetButton = $("#reset");
resetButton.on("click", resetForm);

function resetForm(){
location.reload();
};
}//end init















