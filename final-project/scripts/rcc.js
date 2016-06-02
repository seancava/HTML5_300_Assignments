$(document).ready(init);

function init(){
  displayCollection();
//  localStorage.aKey = "aValue";//ad new data or change existing
//  var value = localStorage.aKey//you can read a value like this//aKey=_id
//  localStorage.removeItem ( "aKey" );//remove an item
//  localStorage.clear();//remove all data
//  localStorage.length// the number of key value pairs
//  localStorage.key(n)//access the value of the key
  
  var deleteButton = $('#delete');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);//DELETE//crudDELETE
  var updateButton = $('#update');
  updateButton.off();
  updateButton.on('click', updateRecord);
  var commitButton = $('#commitnew');
  commitButton.off();
  commitButton.on('click', commitNewRecord);//POST//crudCREATE
  var searchInput = $('#searchInput').val();
  var searchButton = $('#search').on('click', searchRecord);
  var clearButton = $('#clearlocal').on('click', clearLocal)
  var addButton = $('#addnew').on('click', showAddDisplay);
  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);
  var autoSync = ('#autosync');
  var recordCollection = [];
  var recordCollectionLength = recordCollection.length;
  
  localStorage.setItem("collection1", recordCollection);  
  
  function displayCollection(){
    for (var i = 0; i < localStorage.length; i++){
      $('#recordListing').append('<div id="recordListing"><li>' + recordCollection + '</li></div>');
      //localStorage.collection1[i]
    }   
  };
  
  
  $('#listcount').append('<span id="listcount">' + recordCollectionLength + '</span>');
  
  function commitNewRecord(evt){
    $('#addrecord').trigger("reset");
    var addArtist = $('#artistInput').val();
    var addTitle = $('#titleInput').val();
    var addLabel = $('#labelInput').val();
    var addDate = new Date();
    var addId = Math.random();
    var recordProps = []; 
    recordProps.push(addArtist);
    recordProps.push(addTitle);
    recordProps.push(addLabel);
    recordProps.push(addDate);
    recordProps.push(addId);
    recordCollection.push(recordProps);
    
    if (autoSync.checked){
      syncServer;
      localStorage.rcautosync = "true";
    }else{
      localStorage.rcautosync = "false";
    };
    location.reload(); 
  };//end commitNewRecord();
  
  
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
  };
  
  function hideAddDisplay(evt){
    $('#adddisplay').removeClass('show');
    $('#adddisplay').addClass('hide');
  };
  
  function logListResult(data){
      alert('Data received');
  };
  
  
  function deleteRecord(evt){
    localStorage.removeItem ( "rcrecord" );//remove an item
  };//end delete
  
  function updateRecord(evt){//PUT//crudUPDATE
//    evt.preventDefault();
    var addArtist = $('#artist').val();
    var addTitle = $('#title').val();
    var addLabel = $('#label').val();
    var addDate = new Date();
  };//end update
  
  function searchRecord(evt){
  };//end search 
  
  function syncServer(){
    console.log("synced");
  };//end sync
  
  function clearLocal(evt){
    localStorage.clear();
  };//end clear
  
  function getCollection(){
    
  };//end get collection
   
};//end init

