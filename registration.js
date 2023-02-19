var admin = document.getElementById("radioOne");
var user = document.getElementById("radioTwo");


//data
const email = document.getElementById("email");
const pass = document.getElementById("password");


function registerClick(){
        console.log(email.value );
        console.log(pass.value);
        if (email.value == "user" && pass.value == "123") {
            if (admin.checked == true){
                console.log(admin.checked);

                // window.location.href="dashboardadmin.html";
            } else {
                console.log(user.checked);
                // window.location.href="dashboard.html";
            }
            
            
            
        } else {
            // loginErrorMsg.style.opacity = 1;
            console.log("error");
        }
}