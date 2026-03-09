"use strict"

//função que raliza o calculo dos valores
function calcularDesconto(){
    //chama uma classe do html com base o id
    const valor1 = document.getElementById('valorOriginal')
    const valordescon = document.getElementById('valorDesconto')
    resultado.classList.remove("")

    //condições para determinar o valor do desconto e a cor
    if(valordescon <= "5%"){
        valor1 * (valordescon/100)

    }else if(valordescon > "5%" && valordescon <= "10%"){

    }else if(valordescon > "10%"){

    }
}