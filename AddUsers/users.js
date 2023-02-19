
 function adduser(){
   console.log("adduser");
    var e=document.getElementById("add1");
    e.style.display = 'block';
   // if(add-content.style.display == "none")
    //add-content.show();
} 

 
 function closeuser()
 {
     document.getElementById("add1").style.display = "none";
 }

 

 function clearuser(){
   const listItem1 = document.getElementById("taskName");
   listItem1.value = "";
   const listItem2 = document.getElementById("taskDescription");
listItem2.value = "";
const listItem3 = document.getElementById("asignee");
listItem3.value = "";
const listItem4 = document.getElementById("sd");
listItem4.value = "";
const listItem5 = document.getElementById("ed");
listItem5.value = "";
const listItem6 = document.getElementById("hours");
listItem6.value = "";
 }

 
 function saveuser(){
   //window.alert("going to add");
    addTableRow1();
  //  window.alert("going to close");
    closeuser();
    clearuser();
    
 }
 
 function ondelete(ths){
    $(ths).closest("tr").remove();
    window.alert("Deleted user");
 }
 

 
 
 function addTableRow1() {
    var uName = $('#userName').val();
    var mail = $("#emailid").val();
    var table1 = $("#tableData1").val();

    var html = " <tr><td> "+uName+"</a></td><td>"+mail+"</td><td><i class='fa fa-trash-o' onclick='ondelete(this);' aria-hidden='true'></i></td></tr>  ";
    $("#tableData1 tbody").append(html);
    }

   