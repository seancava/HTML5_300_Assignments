$(document).ready(init);

function init(){
  
 var addButton = $('#addnew').on('click', showAddDisplay);
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
    //change css to show div
  };
  
  var commitButton = $('#commitnew').on('click', commitNewRecord);//POST
  function commitNewRecord(evt){
  evt.preventDefault();
  var addProp0 = $('#artist').val();
  var addProp1 = $('#title').val();
  var addProp2 = $('#label').val();
  var addRecord = $('#catalogue').append('<tr><form><td class="addprop">' + addProp0 + '</td><td class="addprop">' + addProp1 + '</td><td class="addprop">' + addProp2 + '</td><td><button id="delete">Delete</button></td><td><button id="update">Update</button></td></form></tr>');
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
  
  var deleteButton = $('#delete').on('click', deleteRecord);//DELETE
  function deleteRecord(){
    
  };
  
  var updateButton = $('#update').on('click', updateRecord);//Put
  function updateRecord(){
    
  };
  
  var searchButton = $('#search').on('click', searchRecord);//GET
  var searchRecord = $.ajax('myreqestRL.com/', {
    method: 'GET',
    data: {
      example: 1,
      eg: 2,
      },
    success: function logListResult(data){
      console.log('Data received: ', data);
  },
    error: logAjaxError
  });
  function logAjaxError(jqXHR, textStatus, errorThrown){
    console.log('AJAX error Status: ', textStatus, 'error', errorThrown);
}
  
//recordProps[0] = "";
//recordProps[1] = "";
//recordProps[2] = "";

  
};//end init

//commitNewRecord();