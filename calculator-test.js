
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 2.5})).toEqual('$94.27');
  expect(calculateMonthlyPayment({amount: 15000, years: 4, rate: 4.8})).toEqual('$344.08');
  expect(calculateMonthlyPayment({amount: 25000, years: 15, rate: 1.3})).toEqual('$152.95');
});


it('should return a result with 2 decimal places', function() {
  expect(calculateMonthlyPayment({amount: 10000, years: 10, rate: 2.5})).toEqual('$94.27');
  expect(calculateMonthlyPayment({amount: 15000, years: 4, rate: 4.8})).toEqual('$344.08');
  expect(calculateMonthlyPayment({amount: 25000, years: 15, rate: 1.3})).toEqual('$152.95');
});

it('should inform users that principles of $0 have no payments', function () {
  expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toEqual('No monthly payments neccessary for $0 principles');
  expect(calculateMonthlyPayment({amount: 0, years: 10, rate: 0})).toEqual('No monthly payments neccessary for $0 principles');
  expect(calculateMonthlyPayment({amount: 0, years: 0, rate: 3.5})).toEqual('No monthly payments neccessary for $0 principles');
  expect(calculateMonthlyPayment({amount: 0, years: 4, rate: 2.4})).toEqual('No monthly payments neccessary for $0 principles');

});

it('should not take negative values as inputs', function () {
  expect(calculateMonthlyPayment({amount: -1000, years: 9, rate: 3.2})).toEqual('Enter a positive value for amount, rate, or years');
  expect(calculateMonthlyPayment({amount:  5000, years: -5, rate: 16.0})).toEqual('Enter a positive value for amount, rate, or years');
  expect(calculateMonthlyPayment({amount:  14000, years: 2, rate: -6.9})).toEqual('Enter a positive value for amount, rate, or years');
});
