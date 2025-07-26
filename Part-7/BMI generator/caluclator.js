const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = domcument.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){ //NaN is Not a Number
        results.innerHTML = "Please enter valid height and weight values.";
    }else if(weight === '' || weight < 0 || isNaN(weight)){ //NaN is Not a Number
        results.innerHTML = "Please enter valid height and weight values.";
    } else {
        const bmi = weight / ((height / 100) ** 2); // Calculate BMI
        // show the result
        results.innnerHTML = `<span>${bmi}</span>`;
    }
})