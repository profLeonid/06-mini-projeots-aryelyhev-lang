"use strict"

//função que realiza a remoção das classes
function removerClasses() {

    //cria a variavel resultado e pega o elemento "resultado" pelo id no html
    let resultado = document.getElementById('resultado')
    resultado.classList.remove("desconto1", "desconto2", "desconto3")
    //pega as classe criadas no style.css (desconto1, desconto2 e desconto3)
}

//função que raliza o calculo dos valores
function calcularDesconto(preco, desconto) {

    const valorEconomizado = preco * desconto / 100
    return valorEconomizado //retorna o resultado da conta acima
}

function mostrarResultado(){

    //cria constantes e converte os parametros para number
    //pega somente o valor guardado dentro dos elementos (preco, desconto e resultado)
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')
   
    resultado.textContent = calcularDesconto(preco, desconto)

    trocarCor(desconto)
    calcularDesconto()
    
}

//função que realza a troca de cor dependendo dos valores
function trocarCor(desconto){

    const resultado = document.getElementById('resultado')
    removerClasses()

    if (desconto <= 5){
        resultado.classList.add('desconto1')
    }else if (desconto >= 6 && desconto <= 10){
        resultado.classList.add('desconto2')
    }else if (desconto > 10){
        resultado.classList.add('desconto3')
    }
}

document.getElementById('calcular')
.addEventListener('click', mostrarResultado)