
    // Function to close the lightbox when clicking outside the image
    function closeLightbox() {
        document.querySelectorAll('.lightbox').forEach(lightbox => {
            lightbox.style.display = 'none';
        });
    }

    // Listen for the escape key press to close the lightbox
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });

    // Open the lightbox
    document.querySelectorAll('.collage-container img').forEach((img, index) => {
        img.addEventListener('click', function () {
            document.getElementById('lightbox' + (index + 1)).style.display = 'flex';
        });
    });

