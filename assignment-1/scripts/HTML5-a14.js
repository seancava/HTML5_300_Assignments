$(document).ready(init);
	
	function init(){
		
		
			//function addInput(evt){
				//event.preventDefault();
				//userEntries.push(userEntry);
				//return userEntries.length;
				
			//};
		var userEntries = [2, 3, 4, 5];
		var userInput = $("#userInput");
		var userEntry = parseInt(userInput.text(), 10);
		var userEntriesLength = userEntries.length;
		$("#entries").html(userEntriesLength);

		var total = 0; 
		var sum = function(){
			for(var i = 0; i < userEntriesLength; i++){
				total = (total + userEntries[i]);
				}
			return parseInt(total, 10);
			};

		var submitButton = $("#submitEntry");
		submitButton.on("click", (userEntries.push(userEntry)));	

		$("#sum").html(sum);

		var average = function(){
			(sum / userEntriesLength);
			average = parseInt(average, 10);
			};
		$("#average").html(average);	
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

};//end init












	