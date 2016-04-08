//$(document).ready(

var submitButton = $("#submitEntry");

submitButton.on("click", addInput);

var userEntries = [0];
var userSum = [0];
var userAverage = [0];

var userEntry = $("#userInput").val();
//userEntry = parseInt(userEntry);
//var notNum = NaN;

function addInput(evt){
	
	userEntries.push(userEntry);
	//var sum = sumCalc;
	
		//console.log(userEntry);


		/*if (userEntry === NaN){
			alert("That is not a number");
		}*/

		/*else{
			console.log(userEntry);
		}*/
		//else{
			
			//var sumOutput = userEntries[0] + userEntry[1];
			//average = sum / userEntries.length

		//} 			
};

$("#entries").html(userEntries.length);//sends the number of indexes in the array to the html li



total = 0;
var sum = function sumCalc(){
	for(var i = 0; i < userEntries.length; i++){
		total = (total + userEntries[i]);
	}
	return total;
};
$("#sum").html(sum);//sends the sum of all values in the array to the html li




var average = function avCalc(){
	var av = (sum / userEntries.length);
	return av;
};
$("#average").html(average);//sends the average of value in the array to the html li





/*var resetButton = $("#reset");
resetButton.on("click", resetForm);

function resetForm(){
	location.reload();
};*/

//)end document ready














	