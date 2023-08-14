import{ calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

//select buttons


const numpadButtons = document.querySelectorAll('.numpad');

const inputElement = document.getElementById('input');

const displayElement = document.getElementById('calcul');

const acButton = document.getElementById('reset');

const cButton  = document.getElementById('clear');

let txtContent;

//création du fonction displayTouch pour affichée le numero ou digit appuiyer
function displayTouch() {
    numpadButtons.forEach(button => {
        button.addEventListener('click', ()=>{
            txtContent = button.textContent;
            
        inputElement.value += txtContent;
        displayElement.innerHTML += txtContent;
        } )
    });
}

//appel de la fontion displayInput
displayTouch()

//suppression de l'attribut type du boutton AC
acButton.removeAttribute("type");