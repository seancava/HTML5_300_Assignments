$(document).ready(init);

function init(){
  var addId = ((Math.random()) * (Math.pow(10, 17)));
  var recordCollectionLength = localStorage.length;
  var idInput = $('#idInput');
  

  $('#listcount').append('You have ' + recordCollectionLength + ' SKU in this collection');
  
  var start = new Date().getFullYear();
  var end = 1910;
  for(var year = start ; year >=end; year--){
      $('#yearInput').append('<option>' + year + '</option>');
    };//sets dates in year dropdown
  
  
  function deleteRecord(evt){
    var deleteInput = $('#idInput').val();
    var remove = "rcRecord" + deleteInput;
    console.log(remove);
    localStorage.removeItem (remove);
    location.reload();
  };//end delete
//  function getDelete(evt){
//    var deleteButton = evt.trigger;
//  };
  //get id attrib of evt
  
  var deleteButton = $('#deletebutton');
  deleteButton.off();
  deleteButton.on('click', deleteRecord);
  
  
  
  function updateRecord(evt){
    $('#adddisplay').removeClass();
    $('#adddisplay').addClass('show');
    var id = "rcRecord" + idInput.val();
    var record = localStorage.getItem(id);
//    evt.preventDefault();
//    for(i = 0; i<recordCollectionLength; i++){
//    var key = localStorage.key(i);
//    var value = localStorage[key];
    var prop = JSON.stringify(record);
    var artist = $('#artistInput').val();
    var title = $('#titleInput');
    var year = $('#yearInput');
    var label = $('#labelInput');
    var sku = $('#skuInput');
    var copies = $('#copiesInput');
    var selling = $('#sellingInput');
    
//    value = value.slice(1, -1)  
//    var prop = value.split(',');
//    $('#catalogue').append('<tr><td>' + prop[0] +
//                          '</td><td>' + prop[1] +
//                          '</td><td>' + prop[2] +
//                          '</td><td>' + prop[3] +
//                          '</td><td>' + prop[4] +
//                          '</td><td>' + prop[5] +
//                          '</td><td>' + prop[6] +
//                          '</td><td>' + prop[7] +
//                          '</td><td>' + prop[8] +
//                          '</td></tr>'
//                          );
   
  };//end update
  var updateButton = $('#updatebutton');
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
    value = value.slice(1, -1)  
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
                          '</td></tr>'
                          );
      
      $('#idInput').append('<option>' + prop[8] + '</option>');
    };
//        function buildDisplay(){
//          $('#catalogue').append('<tr>');
//        for(var i=0; i <=prop.length; i++){
//          $('#catalogue').append('<td>' + prop[i] + 
//                                '</td>');
//        }
//        $('#catalogue').append('</tr>');
//        };  //buildDisplay;
//        buildDisplay;
    //};

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

