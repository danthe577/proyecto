// validation.js

function validateForm() {
    var username = document.getElementById("login-input-user").value;
    var password = document.getElementById("login-input-password").value;

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos");
        return false; // Evitar que el formulario se envíe
    }
}
