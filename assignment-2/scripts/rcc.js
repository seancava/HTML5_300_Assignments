$(document).ready(init);

//var recordCollection = [];
//recordCollection[0] = recordProps[0], recordProps[1], recordProps[2];

function init(){
  
  
  var addButton = $('#addnew').on('click', showAddDisplay);
  var commitButton = $('#commitnew').on('click', commitNewRecord);
  
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
    //change css to show div
  };
  
  
  function commitNewRecord(evt){
  evt.preventDefault();
  var addProp0 = $('#artist').val();
  var addProp1 = $('#title').val();
  var addProp2 = $('#label').val();
  var addRecord = $('#catalogue').append('<tr><td>' + addProp0 + '</td><td>' + addProp1 + '</td><td>' + addProp2 + '</td></tr>');
  var recordProps = [];
  recordProps.push(addProp0);
  recordProps.push(addProp1);
  recordProps.push(addProp2);
  var recordCollection = [];
  recordCollection.push(recordProps);
  $('#adddisplay').removeClass('show');
  $('#adddisplay').addClass('hide'); 
  $('form').trigger('reset');  
  };
 
  
//recordProps[0] = "";
//recordProps[1] = "";
//recordProps[2] = "";

  
};//end init

//commitNewRecord();