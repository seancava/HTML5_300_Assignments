$(document).ready(init);

function init(){
  
  $('#listcount').append('<li id="listcount">' + recordCollectionLength + '</span>');
  var start = new Date().getFullYear();
  var end = 1910;
  for(var year = start ; year >=end; year--){
      $('#yearInput').append('<option>' + year + '</option>');
    };//sets dates in year dropdown
  
  
  function deleteRecord(evt){
    localStorage.removeItem ( "record" );
  };//end delete
  var deleteButton = $('delete');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);
  
  
  function updateRecord(evt){//PUT//crudUPDATE
//    evt.preventDefault();
    var addArtist = $('#artist').val();
    var addTitle = $('#title').val();
    var addLabel = $('#label').val();
    var addDate = new Date();
  };//end update
  var updateButton = $('#update');
  updateButton.off();
  updateButton.on('click', updateRecord);

  
  var searchInput = $('#searchInput').val();
  function searchRecord(evt){
  };//end search 
  var searchButton = $('#search').on('click', searchRecord);
  
  
  function clearLocal(evt){
    localStorage.clear();
  };//end clear
  var clearButton = $('#clearlocal').on('click', clearLocal);
  
  
  function showAddDisplay(evt){
    $('#adddisplay').removeClass('hide');
    $('#adddisplay').addClass('show');
  };
  var addButton = $('#addnew').on('click', showAddDisplay);
  
  
  function hideAddDisplay(evt){
    $('#adddisplay').removeClass('show');
    $('#adddisplay').addClass('hide');
  };  
  var hideDisplayButton = $('#hidepanel').on('click', hideAddDisplay);
  
  
  function syncServer(){
    console.log("synced");
  };//end sync  
  var autoSync = ('#autosync');
    
  var recordCollectionLength = localStorage.length;
  
  function displayCollection(){    
    for(i = 0; i<=recordCollectionLength; i++){
    var key = localStorage.key(i);
    var value = localStorage[key];
      
    $('#catalogue').append('<tr><td>' + value + '</td></tr>');
      console.log('iterate')
    };
  };
  
  if (recordCollectionLength > 0){
    displayCollection();
  };
  
  function commitNewRecord(evt){
    //alert("active");
    
    var d = new Date();
    var month = d.getMonth();
    var date = d.getDate();
    var year = d.getFullYear();

    var dateString = year.toString().substr(2,2);

    
    var addDate = month+"-"+date+"-"+year;
    var addArtist = $('#artistInput').val();
    var addTitle = $('#titleInput').val();
    var addLabel = $('#labelInput').val();
    var addId = ((Math.random()) * 1000000000000000000);
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
    
    localStorage.setItem("rcRecord" + recordProps[7], recordProps);
    //console.log(recordProps[7]);
    
    if (autoSync.checked){
      syncServer;
    };
    
    $('#addrecord').trigger("reset");
   
    displayCollection();
   
  };//end commitNewRecord();
  var commitButton = $('#commitnew');
  commitButton.off();
  commitButton.on('click', commitNewRecord);
  
  
  function logListResult(data){
      alert('Data received');
  };
   
 
};//end init

