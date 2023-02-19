
addTableRow();
function addTableRow() {
    // var taskName = $('#taskName').val();
    // var taskDescription = $("#taskDescription").val();
    // var asignee = $("#asignee").val();
    // var sd = $("#sd").val();
    // var ed = $("#ed").val();
    // var hours = $("#hours").val();
    // var table = $("#tableData").val();

    var taskName = "task1";
    var taskDescription = "Move the circle to right";
    var asignee = "Admin@gmail.com";
    var sd = "August 1, 2023";
    var ed = "August 10, 2023";
    var hours = "40"
    var table = $("#tableData").val();

    var html = " <tr><td> <a href='http://example.com'>"+taskName+"</a></td><td>"+taskDescription+"</td><td>"+asignee+"</td><td>"+sd+"</td><td>"+ed+"</td><td>"+hours+"</td><td><i class='fa fa-trash-o' onclick='ondelete(this);' aria-hidden='true'></i></td></tr>  ";
    $("#tableData tbody").append(html);
 }