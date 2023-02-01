const form = document.getElementById('form');

let sizeSelectValid = false;
let recipeSelectValid = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!recipeSelectValid || !sizeSelectValid) {
        console.error("Veuillez remplir le formulaire correctement.");
    } else {
        console.log("Envoi effectué.");
    }

})

const sizesPrice = {
    small: 7,
    medium: 9,
    large: 11
}

const recipesPrice = {
    margarita: 0,
    fruitsDeMer: 4,
    poulet: 5
}

const sizeSelect = document.getElementById('taille');
const recipeSelect = document.getElementById('type');

const totalLabel = document.getElementById('totalLabel');

let totalPrice = 0;

let sizePrice = 0;
let recipePrice = 0;

sizeSelect.addEventListener('change', () => {
    const sizeValue = sizeSelect.value;
    console.log(sizeValue)
    if (sizeValue && sizeValue.length > 0) {
        sizePrice = sizesPrice[sizeValue];
        sizeSelectValid = true;
    } else {
        sizePrice = 0;
        sizeSelectValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;
});

recipeSelect.addEventListener('change', () => {
    const recipeValue = recipeSelect.value;
    
    if (recipeValue && recipeValue.length > 0) {
        recipePrice = recipesPrice[recipeValue];
        recipeSelectValid = true;
    } else {
        recipePrice = 0;
        recipeSelectValid = false;
    }
    totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;


 // formulaire de contact


contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    let error = false;

    const errors = {
        firstName: document.getElementById('firstNameError'),
        lastName: document.getElementById('lastNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        
    }

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    


    formData.forEach((valeurDuChamp, nomDuChamp) => {
        if (!valeurDuChamp) {
            error = true;
            errors[nomDuChamp].style.display = 'block';
        } else {

            if ((nomDuChamp ==='firstName' || nomDuChamp ==='lastName') && !nameRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp ==='email' && !emailRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp === 'phone' && !phoneRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            }

            error = false;
            errors[nomDuChamp].style.display = 'none';
        }
    });

    if (!error) {
        console.log(formData);

    }    