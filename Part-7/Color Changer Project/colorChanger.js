// Select all elements with class 'button'
const button = document .querySelectorAll('.button');
// Select the body element
const body = document.querySelector('body');

// Loop through each button and add a click event listener
button.forEach( function (button){
    button.addEventListener('click', function (e) {
        // Log the button that was clicked
        console.log(e.target);
        // Check which button was clicked by its id and change body background color accordingly
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})