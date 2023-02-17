var data = [
    {
      "UserID": 1,
      "UserName": "rooter",
      "Password": "12345",
      "Country": "UK",
      "Email": "sac@gmail.com"
    },
    {
      "UserID": 2,
      "UserName": "binu",
      "Password": "123",
      "Country": "uk",
      "Email": "Binu@gmail.com"
    }
];
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

// tbl()
$(document).ready(
    function tbl() {
    var html = '<table class="table table-striped">';
    html += '<tr>';
    var flag = 0;
    $.each(data[0], function(index, value){
        html += '<th>'+index+'</th>';
    });
    html += '</tr>';
     $.each(data, function(index, value){
         html += '<tr>';
        $.each(value, function(index2, value2){
            html += '<td>'+value2+'</td>';
        });
        html += '<tr>';
     });
     html += '</table>';
     $('body').html(html);
}
);