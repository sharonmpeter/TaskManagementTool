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
 }
 function saveDiv(){
    addTableRow();
    closeDiv();
    
 }
 
 function ondelete(ths){
    $(ths).closest("tr").remove();
    window.alert("Delete task");
 }
 
 function onedit(task){
     // Get the parent list item of the clicked button
    // const listItem = btn.parentNode;
    window.alert("Edit task"+task);
     // Remove the list item from the unordered list
    // task.parentNode.removeChild(listItem);
   
 }
 
 
 
 function addTableRow() {
    var taskName = $('#taskName').val();
    var taskDescription = $("#taskDescription").val();
    var asignee = $("#asignee").val();
    var sd = $("#sd").val();
    var ed = $("#ed").val();
    var hours = $("#hours").val();
    var table = $("#tableData").val();

    var html = " <tr><td> <a href='http://example.com'>"+taskName+"</a></td><td>"+taskDescription+"</td><td>"+asignee+"</td><td>"+sd+"</td><td>"+ed+"</td><td>"+hours+"</td><td><i class='fa fa-trash-o' onclick='ondelete(this);' aria-hidden='true'></i></td></tr>  ";
    $("#tableData tbody").append(html);
    }