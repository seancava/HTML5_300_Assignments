$(document).ready(init);
function init(){
  
var submitButton = $("#submitEntry");
submitButton.on("click", addInput);

var userNumberEntries = [];
var userStringEntries = [];
//$("#entries").html(userEntries.length);//sends the number of indexes in the array to the html 

  
function addInput(evt){
  evt.preventDefault();
  //$("form").reset();
	var userEntry = $("#userInput").val();
  if (isNaN(userEntry)){
    userStringEntries.push(userEntry);
  }
  else{
    parseInt(userEntry);
    userNumberEntries.push(userEntry);
  }
  
  //var entriesNumberCount = userNumberEntries.length;
  //var stringCon = userStringEntries.join(' ');
  
  console.log(userNumberEntries);
  console.log(userStringEntries);
  //console.log(userEntry);
  //console.log(userEntries);
  //console.log(userEntries.join(' '));
  //console.log(entries);


  //var total = userEntries[0]; 
 // var sum = function(){
 //   for(var i = 0; i < userEntries.length; i++){
 //     total = (total + userEntries[i]);
 //   }
 //   return userEntries.join(' ');
 // };
//

$("#totalNumbers").html
("The total number of numbers entered is " + userNumberEntries.length);
$("#sumNumbers").html
("The sum of numbers entered is ");
$("#averageNumbers").html
("The average of numbers entered is ");
$("#totalStrings").html
("The total number of strings entered is " + userStringEntries.length);
$("#concatStrings").html("The strings concatenated is: " + userStringEntries.join(' '));
//$("#sum").html(string);//sends the sum of all values in the array to the html li
//
//
//	var average = function avCalc(){
//	var av = (sum / userEntries.length);
//	return av;
//	};
//$("#average").html(average);//sends the average of value in the array to the html li
//
//	userEntries.push(userEntry);
//	//var sum = sumCalc;
//	//console.log(userEntry);
//		if (userEntry === NaN){
//			alert("That is not a number");
//		}
//
//		else{
//			sum;
//			average;
//			//console.log(userEntry);
//		}			
};//end addInput







var resetButton = $("#reset");
resetButton.on("click", resetForm);

function resetForm(){
	location.reload();
};
}//end init















	