
const calcular = document.getElementById('calcular');

function imc () {
    // puxando todos os Id's do HTML(menos o calcular);
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');
    

    // se o nome foi vazio , altura vazio e peso vazio , vai aparecer um popUp na tela;
    if (nome !== ' ' && altura !== '' && peso !== '') {
    
    // calcular o IMC ;
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
    // precisamos usar um if para fazer que ele pegue apenas uma dessas opções;
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';      
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

    // aparecer o resultado na tela;
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

// chamando uma função;
calcular.addEventListener('click', imc);

