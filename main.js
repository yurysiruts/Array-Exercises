// ---------------------- Task no.1 ---------------------- //
// zapytanie i porównanie dwóch liczb

document.getElementById('form-1').addEventListener('keyup', funkcjaPorównania);

const result = document.querySelector('.result');

function funkcjaPorównania(e) {
   const x = document.getElementById("firstInput");
   const y = document.getElementById("secondInput");

   const number1 = parseInt(x.value);
   const number2 = parseInt(y.value);
   
   console.log(number1, typeof number1);
   console.log(number2, typeof number2);

   if ( isNaN(number1) == true || isNaN(number2) == true ) {
      console.log('n1 or n2 is not a number');
      setTimeout(function () {
         setResult(`Należy wypełnić oba pola liczbami!`, "red")
      }, 3000);
   } else {
      if (number1 > number2) {
         setResult(`Pierwsza liczba jest większa niż druga! ${number1} > ${number2}`, "blue");
         console.log(`Pierwsza liczba jest większa niż druga! ${number1} > ${number2}`);
      } else if(number1 < number2) {
         setResult(`Druga liczba jest większa niż pierwsza! ${number1} < ${number2}`, "blue");
         console.log(`Druga liczba jest większa niż pierwsza! ${number1} < ${number2}`);
      } else {
         setResult(`Liczby są równe! ${number1} = ${number2}`, "blue");
         console.log(`Liczby są równe! ${number1} = ${number2}`);
      }
   }
   e.preventDefault;
   if ( isNaN(number1) == true && isNaN(number2) == true ) {
      setTimeout( function () {
         setResult('', )
      }, 500 );
   };
}
function setResult(msg, color) {
   result.textContent = msg;
   result.style.color = color;
}
