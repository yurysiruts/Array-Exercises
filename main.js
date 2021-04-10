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



// ---------------------- Task no.2 ---------------------- //
// lata przestępne

// arr = [];
// yearsArray = [];

// document.getElementById('submit-btn').addEventListener('click', function getNumbers() {
//    const rok1 = document.getElementById('firstYear').value;
//    const rok2 = document.getElementById('secondYear').value ;
   
//    console.log(Number(rok1), Number(rok2));
//    if (rok1 < rok2) {
//       for (let i = Number(rok1); i >= rok1 && i <= rok2; i++) {
//          arr.push(i)
//       };
//    } else {
//       console.log('First year was bigger then the second one!')
//    }
   
//    const check = { x: 4, y: 100, z: 400 };
//    arr.forEach( function (element) {
//       const ostatok1 = element % check.x;
//       const ostatok2 = element % check.y;
//       const ostatok3 = element % check.z;

//       if (ostatok1 == 0) {
//          if (ostatok2 == 0) {
//             if (ostatok3 == 0) {
//                console.log(`${element} - Год високосный!`);
//                yearsArray.push(element);
//             } else {
//             }
//          } else {
//             console.log(`${element} - Год високосный!`);
//             yearsArray.push(element);
//          }
//       } else {
//       }
//    })
//    console.log(yearsArray);
// })


// ---------------------- Task no.3 ---------------------- //

document.querySelector('.btn').addEventListener('click', function() {
   let sum = 0;
   let strNumber = 0;
   let number = 0;
   while( strNumber != null) {
      strNumber = prompt("Type in a number:", ""); 
      if (strNumber == '') {
         break
      }
      number = +strNumber;
      sum += number; 
   }
   if(isNaN != true) {
      alert( 'Suma wszystkich wprowadzonych liczb wynosi: ' + sum);
   }
})



// ---------------------- Task no.4 Zamena na camelCase  ---------------------- //



