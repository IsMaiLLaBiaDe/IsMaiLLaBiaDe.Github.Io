// Définir la date cible
const dateCible = new Date('2026-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s
const dateC_ible = new Date('2027-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s
const date_Cible = new Date('2101-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s


// Sélectionner l'élément HTML
const countdownElement = document.getElementById('countdown');
const countd_ownElement = document.getElementById('countd_own');
const countdown_Element = document.getElementById('count_down');

// Mettre à jour le countdown toutes les secondes
setInterval(() => {
 const maintenant = new Date();
 const maint_enant = new Date();
  const main_tenant = new Date();
 const tempsRestant = dateCible.getTime() - maintenant.getTime();
 const temps_Restant = date_Cible.getTime() - maint_enant.getTime();
  const temp_sRestant = dateC_ible.getTime() - main_tenant.getTime();

 // Calculer les jours, heures, minutes et secondes restantes
 const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
 const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
 const secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);

  // Calculer les jours, heures, minutes et secondes restantes
 const j_ours = Math.floor(temps_Restant / (1000 * 60 * 60 * 24));
 const h_eures = Math.floor((temps_Restant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const m_inutes = Math.floor((temps_Restant % (1000 * 60 * 60)) / (1000 * 60));
 const s_econdes = Math.floor((temps_Restant % (1000 * 60)) / 1000);


   // Calculer les jours, heures, minutes et secondes restantes
 const jo_urs = Math.floor(temp_sRestant / (1000 * 60 * 60 * 24));
 const he_ures = Math.floor((temp_sRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const mi_nutes = Math.floor((temp_sRestant % (1000 * 60 * 60)) / (1000 * 60));
 const se_condes = Math.floor((temp_sRestant % (1000 * 60)) / 1000);
 // Afficher le countdown
 

 countdown_Element.textContent = `Temps restant : ${jours} jours, ${heures} heures, ${minutes} minutes et ${secondes} secondes`;
 countd_ownElement.textContent = `Temps restant : ${jo_urs} jours, ${he_ures} heures, ${mi_nutes} minutes et ${se_condes} secondes`;
 countdownElement.textContent = `Temps restant : ${j_ours} jours, ${h_eures} heures, ${m_inutes} minutes et ${s_econdes} secondes`; }, 1000);



// Définir la date cible
const dates = [
  new Date('2026-03-25T00:00:00'),
  new Date('2027-03-25T00:00:00'),
  new Date('2028-03-25T00:00:00'),
  new Date('2029-03-25T00:00:00'),
  new Date('2030-03-25T00:00:00'),
  new Date('2101-03-25T00:00:00')
];

// Sélectionner l'élément HTML
const countdownElements = [
  document.getElementById('countdown'),
  document.getElementById('countd_own'),
  document.getElementById('count_down')
];


// Mettre à jour le countdown toutes les secondes
setInterval(() => {
 
 
const tempsRestant = [
  dates[0].getTime() - new Date().getTime(),
  dates[1].getTime() - new Date().getTime(),
  dates[2].getTime() - new Date().getTime(),
  dates[3].getTime() - new Date().getTime(),
];


const jours = [
  Math.floor(tempsRestant[0] / (1000 * 60 * 60 * 24)),
  Math.floor(tempsRestant[1] / (1000 * 60 * 60 * 24)),
  Math.floor(tempsRestant[2] / (1000 * 60 * 60 * 24)),
  Math.floor(tempsRestant[3] / (1000 * 60 * 60 * 24))
];


const heures = [
  Math.floor((tempsRestant[0] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  Math.floor((tempsRestant[1] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  Math.floor((tempsRestant[2] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  Math.floor((tempsRestant[3] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  Math.floor((tempsRestant[3] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
];


const minutes = [
  Math.floor((tempsRestant[0] % (1000 * 60 * 60)) / (1000 * 60)),
  Math.floor((tempsRestant[1] % (1000 * 60 * 60)) / (1000 * 60)),
  Math.floor((tempsRestant[2] % (1000 * 60 * 60)) / (1000 * 60)),
  Math.floor((tempsRestant[3] % (1000 * 60 * 60)) / (1000 * 60)),
];

const secondes = [
  Math.floor((tempsRestant[0] % (1000 * 60)) / 1000),
  Math.floor((tempsRestant[1] % (1000 * 60)) / 1000),
  Math.floor((tempsRestant[2] % (1000 * 60)) / 1000),
  Math.floor((tempsRestant[3] % (1000 * 60)) / 1000),
];



 // Afficher le countdown
 

 countdownElements[0].textContent = `Temps restant : ${jours [0] } jours, ${heures [0] } heures, ${minutes [0] } minutes et ${secondes [0]} secondes`;
 countdownElements[1].textContent = `Temps restant : ${jours [1] } jours, ${heures [1] } heures, ${minutes [1] } minutes et ${secondes [1]} secondes`;
 countdownElements[2].textContent = `Temps restant : ${jours [2] } jours, ${heures [2] } heures, ${minutes [2] } minutes et ${secondes [2]} secondes`;}, 1000);














