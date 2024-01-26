document.addEventListener('DOMContentLoaded', function() {
    // Select all images in the gallery
    const galleryImages = document.querySelectorAll('#gallery img');

    // Create a lightbox div and append it to the body
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    // Style for the lightbox
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '1000';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.textAlign = 'center';

    // Event listener for each image
    galleryImages.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.style.display = 'flex';
            const img = document.createElement('img');
            img.src = image.src;
            img.style.maxWidth = '80%';
            img.style.maxHeight = '80%';
            img.style.margin = 'auto';

            // Remove any existing images in lightbox
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }

            lightbox.appendChild(img);
        });
    });

    // Close lightbox when clicked
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.style.display = 'none';
    });
});
