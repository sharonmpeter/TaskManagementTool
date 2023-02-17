
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var admin = document.getElementById("admin");
var user = document.getElementById("user");


//data
const email = document.getElementById("email");
const pass = document.getElementById("password");

// loginButton.addEventListener("click", (e) => {
//    // e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "123") {
//         alert("You have successfully logged in.");
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

function loginClick(){
    // const username = email.value;
    //     const pass = password.value;
        // window.location.href="dashboard.html";
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