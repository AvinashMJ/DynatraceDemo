// script.js
function submitForm() {
    var userName = document.getElementById("name").value;
    if (userName.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    
    // Redirect to welcome page with the user's name in the URL
    window.location.href = "welcome.html?name=" + encodeURIComponent(userName);
}
