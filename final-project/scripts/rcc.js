$(document).ready(init);

function init(){
//  localStorage.aKey = "aValue";//ad new data or change existing
//  var value = localStorage.aKey//you can read a value like this//aKey=_id
//  localStorage.removeItem ( "aKey" );//remove an item
//  localStorage.clear();//remove all data
//  localStorage.length// the number of key value pairs
//  localocalStorageorage.key(n)//access the value of the key
  
  
  var userName;
  
  var collectionName;
  
  var deleteButton = $('#delete');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);
  
  var updateButton = $('#update');
  updateButton.off();
  updateButton.on('click', updateRecord);
  
  var commitButton = $('#commitnew');
  commitButton.off();
  commitButton.on('click', commitNewRecord);
  
  var searchInput = $('#searchInput').val();
  
  var searchButton = $('#search').on('click', searchRecord);
  
  var clearButton = $('#clearlocal').on('click', clearLocal);
  
  var addButton = $('#addnew').on('click', showAddDisplay);
  
  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);
  
  var autoSync = ('#autosync');
  
  var recordCollection = [1,2];
  
  var recordCollectionLength = recordCollection.length;
  
  //localStorage.setItem("collection1", recordCollection); 
  
  var start = new Date().getFullYear();
  var end = 1910;
//  var options = "";
    for(var year = start ; year >=end; year--){
        $('#yearInput').append('<option>' + year + '</option>');
      };
  localStorage.setItem("collection1", recordCollection);//is this redundant should it be record Props
  $('#catalogue').append('<tr><td>' + localStorage.getItem("collection1") + '</td></tr>');
  $('#listcount').append('<li id="listcount">' + recordCollectionLength + '</span>');
  
  
  

  
  function commitNewRecord(evt){
    $('#addrecord').trigger("reset");
    
    var addArtist = $('#artistInput').val();
    var addTitle = $('#titleInput').val();
    var addLabel = $('#labelInput').val();
    var addDate = new Date();   
    var addId = Math.random();
    var addYear = $('#yearInput').val();
    var addSku = $('#skuInput').val();
    var addSelling = $('#saleInput').val();
    var addCopies = $('#copiesInput').val();
    
    var recordProps = []; 
    recordProps.push(addArtist);
    recordProps.push(addTitle);
    recordProps.push(addYear);
    recordProps.push(addLabel);
    recordProps.push(addSku);
    recordProps.push(addSelling);
    recordProps.push(addCopies);
    recordProps.push(addId);
    recordProps.push(addDate);
    
    recordCollection.push(recordProps);
    
    if (autoSync.checked){
      syncServer;
    };
    init();
    //$('#catalogue').append('<tr><td>TEST</td></tr>');
     
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
  
  

   
};//end init

