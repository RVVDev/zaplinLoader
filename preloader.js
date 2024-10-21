// Créer l'overlay et les éléments pour afficher le SVG
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000; /* Fond noir */
    z-index: 999;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://firebasestorage.googleapis.com/v0/b/mount-b912c.appspot.com/o/Frame%201.png?alt=media&token=c3d745bd-b840-4ca6-b809-da24228d5e27';  // Remplace par ton asset orange
svgImage.style.cssText = `
    max-width: 150px;
    max-height: 150px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
overlay.appendChild(svgImage);

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Ajoute un délai de 3 secondes avant de cacher l'overlay
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 3000); // 3000 millisecondes = 3 secondes
});

// Fallback : on cache toujours l'overlay si l'événement 'load' est déclenché
window.addEventListener('load', hideOverlay);

