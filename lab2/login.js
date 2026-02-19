function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = "";

    if (username === "") {
        errorMsg = "Username cannot be empty";
    } else if (password === "") {
        errorMsg = "Password cannot be empty";
    } else if (password.length < 6) {
        errorMsg = "Password must be at least 6 characters";
    } else {
        alert("Login Successful");
        return true;
    }

    document.getElementById("error").innerHTML = errorMsg;
    return false;
}
