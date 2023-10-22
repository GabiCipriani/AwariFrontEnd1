//Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos

const imput = window.prompt('digite a idadde dos dez acompanhantes, separadas por virgula. EX: ', '19,21,45,17,45,67,12,34,30,21' );

const values = imput.split(',');
console.log('idades', values);

let counter = 0;

for(let i = 0; i <values.length; i++){
    const age = parseInt(values[i]);
    
    if( age >= 18){
        counter ++;
    }
}

console.log('Maiores de idade ', counter);

