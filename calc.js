let Calculation = " ";

function handleAnswerbtn(event) {
  if (event.key === "Enter") {
    Calculation = eval(Calculation);
    document.querySelector(".js-Answer").innerHTML = Calculation;
  }
}

function updateCalc(value) {
  Calculation += value;

  document.querySelector(".js-output").innerHTML = Calculation;
}
