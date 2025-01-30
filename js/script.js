// scripts.js

// Funció per carregar el contingut del fitxer header.html a l'element amb id "navbar"
function carregarNavbar() {
    // Utilitzem Fetch API per carregar el contingut del fitxer header.html
    fetch('navbar.html')
        .then(response => response.text()) // Convertim la resposta en text (HTML)
        .then(data => {
            document.getElementById('navbar').innerHTML = data; // Carreguem el contingut al div amb id="navbar"
        })
        .catch(error => console.error('Error carregant el header:', error)); // Si hi ha error, el mostrem
};

// Funció per carregar els elements del desplegable
function carregarDesplegable(url, dropdownId) {
    fetch(url)
        .then(response => response.json())  // Convertim la resposta a JSON
        .then(data => {
            // Obtenim l'element on carregarem els items
            const dropdownContent = document.getElementById(dropdownId);
            // Buidem l'element abans de carregar els nous items
            dropdownContent.innerHTML = '';

            // Afegim les opcions dinàmicament
            data.forEach(item => {
                const a = document.createElement('a');
                a.href = item.url;  // Afegim la URL relativa
                a.textContent = item.name;
                dropdownContent.appendChild(a);
            });
        })
        .catch(error => {
            console.error('Error carregant les dades:', error);
        });
}

// Carreguem les opcions quan la pàgina es carrega
window.onload = function() {
    carregarNavbar();
    carregarDesplegable('data/activitats.json', 'activitatsLlista');
    carregarDesplegable('data/grups.json', 'grupsLlista');
};