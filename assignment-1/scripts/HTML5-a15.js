$(document).ready(init);

	function init(){
		var submitButton = $("#submitEntry");
		submitButton.click(userInput);
		
		
		
		//var userInput = function addInput(evt){
			function addInput(evt){
			var userEntries = [];
			//event.preventDefault();//prevents page reload on form submit
			var userEntry = parseInt($("#userInput").text(), 10);
			userEntries.push(userEntry);
			//return userEntries.length;
			$("#entries").html(userInput);
			
		};
		
		
	};
	
	
//var userEntry = parseInt($("#userInput").text(), 10);




/*function addInput(evt){

	var userEntry = parseInt($("#userInput").text(), 10);
	userEntries.push(userEntry);

/*	if (userEntry === NaN){
		alert("That is not a number");
	}

	else{
		sum;
		average;
	}

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
$("#average").html(average);//sends the average of value in the array to the html li*/

			
//};//end addInput




var resetButton = $("#reset");
resetButton.click(resetForm);

function resetForm(){
	location.reload();
};














	