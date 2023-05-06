const button = document.querySelector('.blue-button')
const counterText = document.querySelector('.counter')
const resetButton = document.querySelector('.reset_button')
let counter = 0;

button.addEventListener('click' , function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

resetButton.addEventListener('click', function( ){
    counter = 0;

    counterText.innerText = 0;
} )
