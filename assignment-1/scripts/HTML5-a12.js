//$(document).ready(


var userEntries = [];
//var userSum = [];
//var userAverage = [];

var userEntry = $("#userInput").val();
//userEntry = parseInt(userEntry);
//var notNum = NaN;

var total 
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


function addInput(evt){
	
	userEntries.push(userEntry);
	//var sum = sumCalc;
	//console.log(userEntry);
		if (userEntry === NaN){
			alert("That is not a number");
		}

		else{
			sum;
			average;
			//console.log(userEntry);
		}			
};

$("#entries").html(userEntries.length);//sends the number of indexes in the array to the html li


var submitButton = $("#submitEntry");
submitButton.on("click", addInput);


var resetButton = $("#reset");
resetButton.on("click", resetForm);

function resetForm(){
	location.reload();
};

//)end document ready














	