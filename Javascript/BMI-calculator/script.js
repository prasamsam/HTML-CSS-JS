const form = document.querySelector("#bmi-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(form.querySelector("#height").value);

  const weight = parseInt(form.querySelector("#weight").value);

  const result = document.querySelector(".result");

  if(height === 0 || height < 0 || isNaN(height)){
    result.innerHTML = `Please enter a valid height`;
  }else if (weight === 0 || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please enter a valid weight`;
  }else{
    const calculatedBMI = (weight/((height * height)/10000)).toFixed(2);
    result.innerHTML = `Your BMI is <b>${calculatedBMI}</b>`
  }
});
