// scripts.js

// Funció per carregar el contingut del fitxer header.html a l'element amb id "navbar"
window.onload = function() {
    // Utilitzem Fetch API per carregar el contingut del fitxer header.html
    fetch('header.html')
        .then(response => response.text()) // Convertim la resposta en text (HTML)
        .then(data => {
            document.getElementById('navbar').innerHTML = data; // Carreguem el contingut al div amb id="navbar"
        })
        .catch(error => console.error('Error carregant el header:', error)); // Si hi ha error, el mostrem
};