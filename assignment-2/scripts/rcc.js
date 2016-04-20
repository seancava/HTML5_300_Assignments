//$(document).ready(function() {

var recordCollection = [];
//recordCollection[0] = recordProps[0], recordProps[1], recordProps[2];

function commitNewRecord(){

  var addProp0 = $('#artist').text();
  var addProp1 = $('#title').text();
  var addProp2 = $('#label').text();
  
  var addRecord = $('#catalogue').append('<tr><td>addProp0</td><td>addProp1</td><td>addProp2</td></tr>');//gets tbody and adds tr for the item and tds for it's properties
  var recordProps = [];
  recordProps.push(addProp0);
  recordProps.push(addProp1);
  recordProps.push(addProp2);
 
  
//recordProps[0] = "";
//recordProps[1] = "";
//recordProps[2] = "";
  recordCollection.push(recordProps);
};//end newRecord
//};//end ready

commitNewRecord();