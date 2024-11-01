// script.js

document.getElementById('forumForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hent brugerinput
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const imageFile = document.getElementById('image').files[0];
    
    // Opret forumopslag
    const post = document.createElement('div');
    post.className = 'forum-post';
    
    post.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
    `;

    // Tilføj billede, hvis der er et valgt
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            post.appendChild(img);
        };
        reader.readAsDataURL(imageFile);
    }

    // Tilføj opslag til forum
    document.getElementById('forumPosts').appendChild(post);

    // Nulstil formular
    document.getElementById('forumForm').reset();
});
