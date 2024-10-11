document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Forhindrer siden i at genindlæse
    checkPassword();
});

function checkPassword() {
    const passwords = ["john", "informatik"];  // Skriv dine adgangskoder her
    const input = document.getElementById("passwordInput").value;
    const message = document.getElementById("message");

    if (passwords.includes(input)) {
        window.location.href = "forside.html";  // Skift til din hovedside
    } else {
        message.textContent = "Forkert kode. Prøv igen.";
        message.style.color = "red";
    }
}
