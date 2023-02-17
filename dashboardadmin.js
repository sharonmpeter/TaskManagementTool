var taskName = document.getElementById("taskName");
var taskDescription = document.getElementById("taskDescription");
var asignee = document.getElementById("asignee");
var sd = document.getElementById("sd");
var ed = document.getElementById("ed");
var hours = document.getElementById("hours");
// var table = document.getElementById("tableData");



function addtask(){
   // window.alert("hello");
    var e=document.getElementById("add");
    e.style.display = 'block';
   // if(add-content.style.display == "none")
    //add-content.show();
} 
function closeDiv()
{
    document.getElementById("add").style.display = "none";
    addTableRow();
}
function saveDiv(){
   closeDiv();
   
}

function ondelete(task){
    // Get the parent list item of the clicked button
   // const listItem = btn.parentNode;
   window.alert("Delete task"+task);
    // Remove the list item from the unordered list
   // task.parentNode.removeChild(listItem);
  
}

function onedit(task){
    // Get the parent list item of the clicked button
   // const listItem = btn.parentNode;
   window.alert("Edit task"+task);
    // Remove the list item from the unordered list
   // task.parentNode.removeChild(listItem);
  
}



function addTableRow() {
    
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= taskName.value;
    row.insertCell(1).innerHTML= taskDescription.value;
    row.insertCell(2).innerHTML= asignee.value;
    row.insertCell(3).innerHTML= sd.value;
    row.insertCell(4).innerHTML= ed.value;
    row.insertCell(5).innerHTML= hours.value;
   }