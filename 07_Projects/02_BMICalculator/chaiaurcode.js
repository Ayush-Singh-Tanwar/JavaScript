const form = document.querySelector('form')
// this usecasse will give you empty. value because we want value after event done in this example we want submittion and then the value will be fullfill we use it after submittion in this below 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    // // for show the results
    // results.innerHTML = `<span>${bmi}</span>`
    let category = '';

    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }

    // Display results
    results.innerHTML = `<span>Your BMI is ${bmi} - ${category}</span>`;
  }
});