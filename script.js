// Création d'un élément audio
let audio = new Audio('chemin/vers/ton/fichier/audio.mp3');

// Création d'un bouton
let bouton = document.createElement('button');
bouton.textContent = 'Jouer de la musique';

// Ajout d'un événement au clic sur le bouton
bouton.addEventListener('click', function() {
audio.play(); // Jouer la musique quand le bouton est cliqué
});

// Ajout du bouton à la page (par exemple au corps du document)
document.body.appendChild(bouton);
