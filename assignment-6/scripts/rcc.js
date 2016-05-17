$(document).ready(init);

function init(){
var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
var collection = 'scavanaugh';
var addButton = $('#addnew').on('click', showAddDisplay); 

  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
  };
  
  $('#commitnew').off();
  $('#commitnew').on('click', commitNewRecord);//POST//crudCREATE
  
  function commitNewRecord(evt){
  evt.preventDefault();

    var addArtist = $('#artist').val();
    var addTitle = $('#title').val();
    var addLabel = $('#label').val();
    var addDate = new Date();
    
    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  artist: addArtist,
                  title: addTitle,
                  label: addLabel,
                  date: addDate,
              },
        success: function logListResult( data ) {
            console.log( 'Data received:', data );
        },
        error: logAjaxError
    } );

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
  }
};//commitNewRecord();
  

  
  var deleteButton = $('#delete').on('click', deleteRecord);//DELETE//crudDELETE
  function deleteRecord(){
    
  };
  
  var updateButton = $('#update').on('click', updateRecord);
  function updateRecord(){//PUT//crudUPDATE
    
  };
  
  var searchInput = $('#searchInput').val();
  var searchButton = $('#search').on('click', searchRecord);
  function searchRecord(evt){
    $.ajax(baseUrl + collection + '/' + searchInput, {//GET//crudREAD
    method: 'GET',
    success: logListResult,
    error: logAjaxError
  });
  
    function logListResult(data){
      console.log('Data received: ', data);
  };
    
  
  function logAjaxError(jqXHR, textStatus, errorThrown){
    console.log('AJAX error Status: ', textStatus, 'error: ', errorThrown);
  };
};
  

};//end init









  
//  var addRecord = $('#catalogue').append('<tr><form><td class="addprop">' + addArtist + '</td><td class="addprop">' + addTitle + '</td><td class="addprop">' + addLabel + '</td><td class="addprop">' + addDate + '</td><td><button id="delete">Delete</button></td><td><button id="update">Update</button></td></form></tr>');
//  var recordProps = [];
//  recordProps.push(addArtist);
//  recordProps.push(addTitle);
//  recordProps.push(addLabel);
//  var recordCollection = [];
//  recordCollection.push(recordProps);
//  $('#adddisplay').removeClass('show');
//  $('#adddisplay').addClass('hide'); 
//  $('form').trigger('reset');  
//  };