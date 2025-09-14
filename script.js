// Définir la date cible
const dateCible = new Date('2026-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s
const date_Cible = new Date('2101-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s
const dateC_ible = new Date('2027-03-25 00:00:00'); // Exemple : 31 décembre 2024, 23h59min59s

// Sélectionner l'élément HTML
const countdownElement = document.getElementById('countdown');
const countdown_Element = document.getElementById('count_down');
const countdown_Element = document.getElementById('countd_own');
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







