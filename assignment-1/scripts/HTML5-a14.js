var submitButton = $("#submitEntry");
		submitButton.click(addInput);

	function addInput(evt){
		
		//event.preventDefault();
		
		var userEntries = [];
		var userEntry = parseInt($("#userInput").text(), 10);
		userEntries.push(userEntry);
		$("#entries").html(userEntries.length);//sends the number of indexes in the array to the html li
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














	