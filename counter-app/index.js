const addOneELement = document.getElementById('addOneElement')
const addTwoElements = document.getElementById('addTwoElements')
const counterText = document.querySelector('.counter')
const resetButton = document.getElementById('resetElement')
const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

addOneElement.addEventListener('click' , function() {
    counter = counter + parseInt(addOneElement.dataset.pools);

    counterText.innerText = counter;
});

addTwoElements.addEventListener('click', function(){
    counter = counter + parseInt(addTwoElements.dataset.pools)

    counterText.innerText = counter;
});

resetButton.addEventListener('click', function( ){
    counter = COUNTER_INITIAL_VALUE;

    counterText.innerText = 0;
} )
