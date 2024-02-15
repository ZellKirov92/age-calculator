/*======================================*
*Initialisation de l'ecoute d'evenement *
*=======================================*/
document.getElementById("dateForm").addEventListener("submit", function (ev) {
    ev.preventDefault();
/*===============================
*Saisie des elements dans le HTML*
*Récuperation des valeurs saisies*
* par l'utilisateur en même temps *
===================================*/
const days = parseInt(document.getElementById("day").value);
const months = parseInt(document.getElementById("month").value);
const years = parseInt(document.getElementById("year").value);

/*=================================*
* Vérifier que les Champs ne soient *
* pas vides sinon affichage d'erreur*
====================================*/
if (years < 1900 || years > 3000 || months < 1 || months > 12 || days < 1 || days > 31 || ! dateValid(years, months, days)) {
    alert("Please fill in all fields");
    return;
}

/*====================================*
*Creation de la fonction qui verifie 
*la date du jour actuel               *
======================================*/

function dateValid(years, months, days) {
    const dateTesting = new Date(years, months - 1, days);
    return dateTesting.getFullYear() === years && dateTesting.getMonth() === months - 1 && dateTesting.getDate() === days;
}

/*=======================================*
*Calcul de l'age entré par l'utilisateur*
=========================================*/

const today = new Date();
const userBirthday = new Date(years, months - 1, days);
const subtraction = today - userBirthday;
const ageUser = new Date (subtraction);


/*======================================*
*Stocker les valeurs obtenues dans les
*variables qui vont afficher les resultats
* à l'écran
=========================================*/

const resultYears = ageUser.getFullYear() - 1970;
const resultMonths = ageUser.getMonth();
const resultDays = ageUser.getDate();

/*=========================================*
*Envoie des données à l'écran de l'utilisateur*
================================================*/

document.getElementById("resultYears").textContent = resultYears;
document.getElementById("resultMonths").textContent = resultMonths;
document.getElementById("resultDays").textContent = resultDays;

});
