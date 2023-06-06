window.addEventListener("DOMContentLoaded", domLoaded);

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9/5 + 32;
 }
 
 function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5/9;
 }
 
 function domLoaded() {
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');
   const weatherImage = document.getElementById('weatherImage');
   
   function clearOpposingTextField(inputField) {
     if (inputField === cInput) {
       fInput.value = '';
     } else if (inputField === fInput) {
       cInput.value = '';
     }
   }
   
   cInput.addEventListener('input', function() {
     clearOpposingTextField(cInput);
   });
   
   fInput.addEventListener('input', function() {
     clearOpposingTextField(fInput);
   });
   
   convertButton.addEventListener('click', function() {
     const celsius = parseFloat(cInput.value);
     const fahrenheit = parseFloat(fInput.value);
     
     if (!isNaN(celsius)) {
       fInput.value = convertCtoF(celsius);
       errorMessage.innerHTML = '';
     } else if (!isNaN(fahrenheit)) {
       cInput.value = convertFtoC(fahrenheit);
       errorMessage.innerHTML = '';
     } else {
      const invalidInput = cInput.value !== '' ? cInput.value : fInput.value;
      errorMessage.innerHTML = `${invalidInput} is not a number`;
    }
     
     const convertedFahrenheit = parseFloat(fInput.value);
     if (!isNaN(convertedFahrenheit)) {
       if (convertedFahrenheit <= 32) {
         weatherImage.src = 'cold.png';
       } else if (convertedFahrenheit <= 50) {
         weatherImage.src = 'cool.png';
       } else {
         weatherImage.src = 'warm.png';
       }
     }
   });
 }