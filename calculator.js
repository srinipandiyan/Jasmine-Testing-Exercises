window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

  const uiAmount = document.getElementById("loan-amount");
  const uiYears = document.getElementById("loan-years");
  const uiRate = document.getElementById("loan-rate");

  const initialValues = {amount: 50000, years: 15, rate: 2.5};
    uiAmount.value = initialValues.amount;
    uiYears.value = initialValues.years;
    uiRate.value = initialValues.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(initialValues) {
  let P = initialValues.amount;
  let i = initialValues.rate * 0.01 / 12;
  let n = initialValues.years * 12;

  let monthlyPayment = ((P * i) / (1 - (1 + i)**(-n)));
  let roundedPayment = (Math.round(monthlyPayment * 100) / 100);
  let monthly = '$' + roundedPayment.toString();

  if (P === 0){
    monthly = 'No monthly payments neccessary for $0 principles'
  }
  
  if (P < 0 || i < 0 || n < 0){
    monthly = 'Enter a positive value for amount, rate, or years'
  }

  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayments = document.querySelector('#monthly-payment');
  monthlyPayments.innerText = monthly;
}
