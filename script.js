function saveToLocalStorage() {
    var name1 = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem("userName", name1);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
}

var storedName = localStorage.getItem("userName");
var storedEmail = localStorage.getItem("userEmail");
var storedPassword = localStorage.getItem("userPassword");

function matchingDetails() {
    var loginEmail = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        
            alert(`${storedName}, You have successfully logged in.`)
    } 
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid email or password",
        });
    }
}
