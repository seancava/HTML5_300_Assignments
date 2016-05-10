$(document).ready(init);
function init(){
  $('#submit').on('click', update);
  
  
  
  function update(evt){
    //evt.preventDefault();
      var checkboxValue = $('#checkbox').is(':checked');
      var radValue = $('input[name="rad"]:checked').val();
      var textValue = $('#textInput').val();
      var textAreaValue = $('textarea').val();
      var selectValue = $('select option:selected').text();
      var colorValue = $('#color').val();
      var dateValue = $('#date').val();
      var dateTimeValue = $('#datetime').val();
      var dateTimeLocal = $('#datetime-local').val();
//    var monthValue = $('month').val();
//    var emailValue = $('email').val();
//    var numberValue = $('number').val();
//    var passwordValue = $('password').val();
//    var rangeValue = $('range').val();
//    var searchValue = $('search').val();
//    var telValue = $('tel').val();
//    
//    
    $('#checkVal').append('<td id="checkVal">' + checkboxValue + '</td');
    $('#radVal').append('<td id="radVal">' + radValue + '</td');
    $('#textVal').append('<td id="textVal">' + textValue + '</td');
    $('#textAreaVal').append('<td id="textAreaVal">' + textAreaValue + '</td');
    $('#selectVal').append('<td id="textAreaVal">' + selectValue + '</td');
    $('#colorVal').append('<td id="colorVal">' + colorValue + '</td');
    $('#dateVal').append('<td id="dateVal">' + dateValue + '</td');
    $('#datetimeVal').append('<td id="dateTimeVal">' + dateTimeValue + '</td');  
    $('#dateTimeLocalVal').append('<td id="dateTimeLocalVal">' + dateTimeValue + '</td');
    //$('textVal').html('<td id="textVal">' + 'textValue');
//document.getElementById('textVal').innerHTML = textValue;
  };//end update
  
  
  
  
  
  

  
  
  
  
  
}//end init