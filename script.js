document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Forhindrer formularen i at genindlæse siden
    checkPassword();
});

function checkPassword() {
    const passwords = ["john", "informatik"];  // Angiv dine to adgangskoder her
    const input = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");

    if (passwords.includes(input)) {
        window.location.href = "blaa_bog.html";  // Skift til din hovedside
    } else {
        message.textContent = "Forkert kode. Prøv igen.";
        message.style.color = "red";
    }
}
