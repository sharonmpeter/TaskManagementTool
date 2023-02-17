
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var admin = document.getElementById("radioOne");
var user = document.getElementById("radioTwo");


//data
const email = document.getElementById("email");
const pass = document.getElementById("password");


function loginClick(){
        console.log(email.value );
        console.log(pass.value);
        if (email.value == "user" && pass.value == "123") {
            if (admin.checked == true){
                window.location.href="dashboardadmin.html";
            } else {
                window.location.href="dashboard.html";
            }
            
            
            
        } else {
            // loginErrorMsg.style.opacity = 1;
            console.log("error");
        }
}