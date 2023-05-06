const addOneELement = document.getElementById('addOneElement')
const counterText = document.querySelector('.counter')
const resetButton = document.getElementById('resetElement')
const COUNTER_INITIAL_VALUE = 0;

let counter = CONTER_INITIAL_VALUE;

addOneElement.addEventListener('click' , function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

resetButton.addEventListener('click', function( ){
    counter = 0;

    counterText.innerText = 0;
} )
