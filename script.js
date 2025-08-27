// Définir la date cible
const dateCible = new Date('2026-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s
const date_Cible = new Date('2101-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s

// Sélectionner l'élément HTML
const countdownElement = document.getElementById('countdown');
const countdown_Element = document.getElementById('count_down');

// Mettre à jour le countdown toutes les secondes
setInterval(() => {
 const maintenant = new Date();
 const tempsRestant = dateCible.getTime() - maintenant.getTime();

 // Calculer les jours, heures, minutes et secondes restantes
 const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
 const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
 const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

 // Afficher le countdown
 countdown_Element.textContent = `Temps restant : ${jours} jours, ${heures} heures, ${minutes} minutes et ${secondes} secondes`;
 countdownElement.textContent = `Temps restant : ${jours} jours, ${heures} heures, ${minutes} minutes et ${secondes} secondes`; }, 1000);




