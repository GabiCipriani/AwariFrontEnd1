// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

const imput = window.prompt('digite cinco numeros de 1 a 100, seprados por virgula:', '33,30,72,48,51');

const values = imput.split(','); // acabei de criar uma array com as idades (strings) separadas.
    console.log('idades', values);

    // agora vamos criar um loop

    let result = 0;

    for(let i = 0; i < values.length; i++){

        result += parseInt(values[i]) //aqui estamos tranformando as strings em intergers. 
    }

        const average = result / values.length

        console.log('média das idades:', average);