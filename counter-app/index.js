let button = document.querySelector('.blue-button')
let counterText = document.querySelector('.counter')
let close = document.querySelector('.red-button')
let counter = 0;

button.addEventListener('click' , function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

close.addEventListener('click', function( ){
    counter = 0;

    counterText.innerText = 0;
} )