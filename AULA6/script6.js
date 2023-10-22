//Faça um programa que recebe um número inteiro e mostre a tabuada desse número

const number = window.prompt('digite um numero inteiro para ver a tabuada:', 'ex: 10');
console.log("tabuada de " + number);
     for(let i = 0; i <= number; i++){
          
          console.log(number + " x " + i + " = " + number * i);
     }
          
