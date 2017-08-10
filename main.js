let outputNumbers = document.querySelectorAll('.numbers');

outputNumbers.forEach(function(n) {
  // console.log(n.value);
    n.addEventListener('click', function(value) {
        document.querySelector('.output').innerHTML += n.value
    })
})

let operatorBS = document.querySelectorAll('.operators');
operatorBS.forEach(function(operbttns) {
    operbttns.addEventListener('click',
    function(event) {

        let keypressed = event.path[0].textContent;

          if (keypressed === '+' || keypressed === '-' || keypressed === '*' || keypressed === '/' || keypressed === '%'){ document.querySelector('.output').innerHTML += operbttns.value
        } else if (keypressed === 'C') {
            document.querySelector('.output').innerHTML = ''
        } else{
            let result = eval(document.querySelector('.output').innerHTML);
            document.querySelector('.output').innerHTML = result
        }
    })
})

// let outPutHookUP = document.querySelector('.output');



//
//
//
// // I tried it Gils way, the equals button does not eval
//
// let outputR = document.getElementById('output')
// console.log("deeeed I git out!" +output)
//
//
//
// document.getElementById('number1').addEventListener('click', button1);
// document.getElementById('number2').addEventListener('click', button2);
// document.getElementById('number3').addEventListener('click', button3);
// // document.getElementById('number4').addEventListener('click', button4);
// // document.getElementById('number5').addEventListener('click', button5);
// // document.getElementById('number6').addEventListener('click', button6);
// // document.getElementById('number7').addEventListener('click', button7);
// // document.getElementById('number8').addEventListener('click', button8);
// // document.getElementById('number9').addEventListener('click', button9);
// // document.getElementById('operator1').addEventListener('click', operator1);
// // document.getElementById('operator2').addEventListener('click', operator2);
// document.getElementById('operator3').addEventListener('click', operator3);
// // document.getElementById('operator4').addEventListener('click', operator4);
// // document.getElementById('operator5').addEventListener('click', operator5);
//
// // document.getElementById('operator7').addEventListener('click', operator7);
// // document.getElementById('number17').addEventListener('click', button17);
// // document.getElementById('number18').addEventListener('click', button18);
//
//
//
//
//
// // value =
// // button = `button${value}`
//
//
//
//
// function button1() {
//     console.log(button1)
//     outputR.innerHTML+= '1'
//
//   }
// function button2() {
//
//       console.log(button2)
//       outputR.innerHTML+= '2'
//     }
// function button3() {
//
//         console.log(button3)
//         outputR.innerHTML+= '3'
//       }
// function operator3() {
//
//           console.log(operator3)
//           outputR.innerHTML+= '+'
//         }
//
// document.getElementById('operator6').addEventListener('click', operator6);
//
// function operator6() {
//             outputR.innerHTML+= '='
//             let equation = outputR.innerHTML;
//             console.log(equation);
//             let result= eval(equation)
//             console.log(result)
//             outputR.innerHTML= result;
//
//           }
