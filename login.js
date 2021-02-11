var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Nilesh" && password == "9985404257"){
// alert ("Login successfully");
location.href = "quiz/index.html";
}
else{
alert("Wrong Username/Password");
}
}