

// TODO: Faire la manipulation du DOM dans ce fichier

//select buttons
const numpadButtons = document.querySelectorAll('.numpad');
const inputElement = document.getElementById('input');
const displayElement = document.getElementById('calcul');
const acButton = document.getElementById('reset');
const cButton = document.getElementById('clear');
const percentageButton = document.getElementById('percentage');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus')
const timesButton = document.getElementById('times')
const dividebyButton = document.getElementById('divideby')
const plusoumoinsButton = document.getElementById('plusoumoins')
const equalsButton = document.getElementById('equals');
let txtContent, contentCalcul = 0, contentElement;


//bloquer la saisie au clavier
inputElement.addEventListener('keypress', (event) => {
    event.preventDefault()
})

//création du fonction displayTouch pour affichée le numero ou digit appuiyer
function displayTouch() {
    numpadButtons.forEach(button => {
        button.addEventListener('click', ()=>{

          if(inputElement.value === 0){
            inputElement.value = button.textContent;
          }
                // Si le bouton cliqué est un point et que l'inputElement en contient déjà un, ne rien faire.
            if (button.textContent === '.' && inputElement.value.includes('.')) {
                return;
            }

            if (inputElement.value.length >= 10) {
                inputElement.value = inputElement.value.slice(0, -1);
                
            }contentElement = button.textContent;
          console.log()
            txtContent = button.textContent;
            inputElement.value += txtContent;
        } )
    });
}
//appel de la fontion displayInput
displayTouch()

//button AC pour toutes effacer et annuler toutes les operation
acButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputElement.value = '';
  displayElement.innerHTML = '';
  contentElement = ''
});

//button C pour effacer le dernier élment contenu dans inputElement et displayElement
cButton.addEventListener('click', (event) => {
  event.preventDefault();
  inputElement.value = inputElement.value.slice(0, -1);
});


//button addition
plusButton.addEventListener('click', (event) => {
  event.preventDefault();

  //ajouter une operation de plus sur ce qui là trouver
  //add one more operation on what to find there
  operationCalcul('+')
});

//button sustraction
minusButton.addEventListener('click', (event) => {
  event.preventDefault();
  operationCalcul('-')
});

//button multiplication
timesButton.addEventListener('click', (event) => {
  event.preventDefault();

  operationCalcul('*')
});

//button division
dividebyButton.addEventListener('click', (event) => {
  event.preventDefault();
  operationCalcul('/')

});

//button plusoumoins
plusoumoinsButton.addEventListener('click', (event) => {
  event.preventDefault();
  if(inputElement.value === ""){
    return;
  }
  else{
    let contPlusMoins = eval(inputElement.value * -1);
    inputElement.value = contPlusMoins;
  }
});

//button pourcentage
percentageButton.addEventListener('click', (event) => {
  event.preventDefault();
  let contPourcentage = eval(inputElement.value / 100);
  inputElement.value = contPourcentage;
});

//button egal
equalsButton.addEventListener('click', (event) => {
  event.preventDefault();
  displayElement.innerHTML += inputElement.value;
  contentCalcul = eval(displayElement.textContent);
  if (contentCalcul === Infinity) {
    displayElement.innerHTML += ' = Erreur';
    inputElement.value = 'Erreur'
  }
  else {
    displayElement.innerHTML += ` = ${contentCalcul}`;
    inputElement.value = contentCalcul;
  }
});

function operationCalcul(signe) {
  
  if (displayElement.textContent.includes("1234567890") &&
    displayElement.textContent.includes("*") === true ||
    displayElement.textContent.includes("+") === true ||
    displayElement.textContent.includes("/") === true ||
    displayElement.textContent.includes("-") === true) {
    displayElement.textContent= "";
    displayElement.innerHTML += inputElement.value;
    displayElement.innerHTML += ` ${signe} `;
    inputElement.value = ''
  }   
  else {
    displayElement.innerHTML += inputElement.value;
    displayElement.innerHTML += ` ${signe} `;
    inputElement.value = ''
  }
}