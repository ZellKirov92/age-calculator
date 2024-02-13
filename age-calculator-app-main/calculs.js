/*===============================
*Saisie des elements dans le HTML *
===================================*/
let day = document.getElementById("day");
let sectionMonth = document.getElementById("sectionMonth");
let month = document.getElementById("month");
let sectionYear = document.getElementById("sectionYear");
let year = document.getElementById("year");
let input = document.querySelectorAll("input[required]");
let dateForm = document.getElementById("dateForm");
/*Definition de l'evenement*/

input.forEach((inputs) => {
    inputs.addEventListener("focus", () => {resetInputs(inputs)}, false);
    inputs.addEventListener("blur", () => {validateInputs(inputs)}, false);
});



/*===============================
*Parametrage des champs de saisies*
=================================*/

function validateInputsDays() {
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let dayInMonth = new Date(day, month, 0).getDate();
    if(isNaN(day) || day < 1 || day > 31 || day > dayInMonth) {
        alert("Please enter a valid Date");
        return false;
    }
    else {
        return true;
    }
}

function validateInputsMonths() {
    let month = parseInt(document.getElementById("month").value);
    if(isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid Month");
        return false;
    }
    else {
        return true;
    }
}

function validateInputsYears() {
    let year = parseInt(document.getElementById("year").value);
    if(isNaN(year) || year < 1900 || year > 2024) {
        alert("Please enter a valid Year");
        return false;
    }
    else {
        return true;
    }
}

/*===============================*
*Validation du formulaire de date*
*=================================*/


dateForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    input.forEach((inputs) => {resetInputs(inputs)});
    let valid = true;
    input.forEach((inputs) => {
        if( ! validateInputs(inputs)){
            valid = false;
        }
    });
if(valid){
    ev.target.submit();
}
}, false);
    


function validateInputs(inputs){
    if(!validateInputsDays() || !validateInputsMonths() || !validateInputsYears()) {
        return true;
    } else {
        inputs.classList.add('invalid');
        


        return false;

    } 
};

function resetInputs(inputs){
    let inputLabel = inputs.previousElementSibling;
    inputs.classList.remove('invalid'); 
    while(inputLabel.firstElementChild){
        inputLabel.removeChild(inputLabel.firstElementChild);
    }
    input.valid = true;
}
