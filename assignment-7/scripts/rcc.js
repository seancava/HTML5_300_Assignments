$(document).ready(init);

function init(){
  
//  localStorage.aKey = "aValue";//ad new data or change existing
//  var value = localStorage.aKey//you can read a value like this//aKey=_id
//  localStorage.removeItem ( "aKey" );//remove an item
//  localStorage.clear();//remove all data
//  localStorage.length// the number of key value pairs
//  localStorage.key(n)//access the value of the key
  $('#autosync');
  $('#commitnew').off();
  $('#commitnew').on('click', commitNewRecord);//POST//crudCREATE

  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'scavanaugh';
  var addButton = $('#addnew').on('click', showAddDisplay);
  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);
  var autoSync = ('#autosync');
  //var recordProps = [];
  //var recordCollection = [];
  var recordCollectionLength = 
  
  
  
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
  };
  
  function hideAddDisplay(evt){
    $('#adddisplay').removeClass('show');
    $('#adddisplay').addClass('hide');
  };
  

  function logListResult(data){
      alert('Data received: ', data);
  };
  
  
  function logAjaxError(jqXHR, textStatus, errorThrown){
    alert('AJAX error Status: ', textStatus, 'error: ', errorThrown);
  };
  
  
  

  function commitNewRecord(evt){
    evt.preventDefault();

    var addArtist = $('#artistInput').val();
    var addTitle = $('#titleInput').val();
    var addLabel = $('#labelInput').val();
    var addDate = new Date();
    var recordId = Math.random();
    //var addRecord = localStorage.getItem("artist", "title", "label", "date");
    //var recordCollection = localStorage.getItem

//    recordProps.push(addArtist);
//    recordProps.push(addTitle);
//    recordProps.push(addLabel);
    
    localStorage.setItem(recordId, {
        artist: "addArtist",
        title: "addTitle",
        label: "addLabel",
        date: "addDate"
      });
    

//    localStorage.artist = "addArtist";
//    localStorage.title = "addTitle";
//    localStorage.label = "addLabel";
//    localStorage.date = "addDate";
    
    //localStorage.collection = "recordCollection";
    
    //ad new data or change existing//instead of push to recordCollection
    //recordCollection.push(recordProps);
    
    if (autoSync.checked){
      syncServer;
      localStorage.autosync = "true";
    }else{
      localStorage.autosync = "false";
    }

//    $.ajax( baseUrl + collection,
//      {
//      method: 'POST',
//      data: {
//      artist: addArtist,
//      title: addTitle,
//      label: addLabel,
//      date: addDate,
//      },
//      success: function displayCatalogue(){
      var countEntries = recordCollection.length;
      function generateId(){
        Math.random();
      };
      $('#catalogue').prepend('<tr><td>' + addArtist + '</td><td>' + addTitle + '</td><td>' + addLabel + '</td><td>' + addDate + '</td><form><td><button id="update' + generateId + '">Update</button></td><td><button id="delete' + generateId + '">Delete</button></td></form><td>' + countEntries + '</td></tr>'); 
//      };
//      error: logAjaxError
//      } );
//
//      function logAjaxError( jqXHR, textStatus, errorThrown ) {
//          alert( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
//        };
  };//end commitNewRecord();
  

  var deleteButton = $('#delete1');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);//DELETE//crudDELETE
  function deleteRecord(evt){
    localStorage.removeItem ( "record" );//remove an item
  };
//  function deleteRecord(){
//     $.ajax(baseUrl + collection + '/' + id, {
//    method: 'DELETE',
//    success: logDeleteResult,
//    error: logAjaxError
//  });    
//  };
//     function logDeleteResult(data){
//      alert('Data received: ', data);
//  };
//  function logAjaxError(jqXHR, textStatus, errorThrown){
//    alert('AJAX error Status: ', textStatus, 'error: ', errorThrown);
//  };//end delete
  
  var updateButton = $('#update1');
  updateButton.off();
  updateButton.on('click', updateRecord);
  function updateRecord(evt){//PUT//crudUPDATE
    evt.preventDefault();
    var addArtist = $('#artist').val();
    var addTitle = $('#title').val();
    var addLabel = $('#label').val();
    var addDate = new Date();
    
//     $.ajax(baseUrl + collection + '/' + id, {
//    method: 'PUT',
//    data: {
//              artist: addArtist,
//              title: addTitle,
//              label: addLabel,
//              date: addDate,
//          },
//    success: logUpdateResult,
//    error: logAjaxError
//  });
  };
  
  var searchInput = $('#searchInput').val();
  
  var searchButton = $('#search').on('click', searchRecord);
  function searchRecord(evt){
//    $.ajax(baseUrl + collection + '/' + searchInput, {//GET//crudREAD
//    method: 'GET',
//    success: logListResult,
//    error: logAjaxError
//  });
//  
//    function logListResult(data){
//      alert('Data received: ', data);
//  };
//    
//  
//  function logAjaxError(jqXHR, textStatus, errorThrown){
//    alert('AJAX error Status: ', textStatus, 'error: ', errorThrown);
//  };   

  };//end search 
  
  function syncServer(){
    //update remote collection
//         $.ajax(baseUrl + collection + '/' + id, {
//    method: 'PUT',
//    data: recordCollection,
//    success: logUpdateResult,
//    error: logAjaxError
//  });
    console.log("synced");
  };
};//end init

