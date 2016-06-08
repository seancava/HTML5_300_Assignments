$(document).ready(init);

function init(){
  var recordCollectionLength = localStorage.length;
  
  $('#listcount').append('You have ' + recordCollectionLength + ' SKU in this collection');
  var start = new Date().getFullYear();
  var end = 1910;
  for(var year = start ; year >=end; year--){
      $('#yearInput').append('<option>' + year + '</option>');
    };//sets dates in year dropdown
  
  
  function deleteRecord(evt){
    localStorage.removeItem ("record");
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
    location.reload();
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
    
  
  
  function displayCollection(){    
    for(i = 0; i<recordCollectionLength; i++){
    var key = localStorage.key(i);
    var value = localStorage[key];
    value = JSON.stringify(value);
    var prop = value.split(',');
    $('#catalogue').append('<tr><td>' + prop[0] +
                          '</td><td>' + prop[1] +
                          '</td><td>' + prop[2] +
                          '</td><td>' + prop[3] +
                          '</td><td>' + prop[4] +
                          '</td><td>' + prop[5] +
                          '</td><td>' + prop[6] +
                          '</td><td>' + prop[7] +
                          '</td><td>' + prop[8] +
                          '</td</tr>'
                          );
//        function buildDisplay(){
//          $('#catalogue').append('<tr>');
//        for(var i=0; i <=prop.length; i++){
//          $('#catalogue').append('<td>' + prop[i] + 
//                                '</td>');
//        }
//        $('#catalogue').append('</tr>');
//        };  //buildDisplay;
//        buildDisplay;
    };

  };//end display collection
  
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
    var addId = ((Math.random()) * (Math.pow(10, 17)));
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
    recordProps.push(addDate);
    recordProps.push(addId);
    
    localStorage.setItem("rcRecord" + addId, recordProps);
    //console.log(recordProps[7]);
    
    if (autoSync.checked){
      syncServer;
    };
    
    //$('#addrecord').trigger("reset");
    location.reload();
   
    displayCollection();
   
  };//end commitNewRecord();
  var commitButton = $('#commitnew');
  commitButton.off();
  commitButton.on('click', commitNewRecord);
  
  
  function logListResult(data){
      alert('Data received');
  };
 
 displayCollection;
};//end init

