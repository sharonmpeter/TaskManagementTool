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