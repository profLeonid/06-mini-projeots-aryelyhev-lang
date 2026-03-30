"use strict"

//função responsavel por remover qualquer coisa que esteja no campo 
//do resultado, sempre que o usuario tentar realizar um novo calculo 
function removerClasse(){

    //pega o conteiner resultado
    //adiciona os parametros que devem ser removidos 
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixoPeso', 'pesoNormal', 'sobrepeso', 'obesidade1', 'obesidade2', 'obesidade3')
}

//função responsavel por realizar o calculo do imc
function calcularImc(alturaAluno, pesoAluno){

    //variavel que guarda o calculo do imc
    const calculoDoImc = pesoAluno / (alturaAluno * alturaAluno)
    return calculoDoImc
}

//função responsavel por receber o resultado do calculo
//e exibi-lo já com sua cor atribuida
function exibirResultado(){

    //pega os elementos do html e atribui a variaveis que 
    //podem ser utilizadas em outra funções
    const altura01 = Number(document.getElementById('altura').value)
    const peso01 = Number(document.getElementById('peso').value)

    const resultado = document.getElementById('resultado')
    const status = calcularImc(altura01, peso01)
    resultado.textContent = status

    trocarCor(status)
}

//função responsavel por atribuir o grau do peso do aluno, de acordo com o resultado do imc
//podendo assim fazer a troca da cor do campo confome o nivel de peso do aluno
function trocarCor(calculoDoImc){

    //pega o conteiner resultado (do html) e atribui a uma variavel "resultado" (aqui no js)
    const resultado = document.getElementById('resultado')

    removerClasse() 
    //chama a classe que irá remover os elementos 
    //que estarão dentro do campo "resultado"
    //sempre que o aluno quiser realizar um novo calculo do imc
    
    if (calculoDoImc < 18.5){
        //exibe o status do aluno "abaixo do peso"
        resultado.classList.add('abaixoPeso')
        resultado.textContent = "abaixo do peso"

    }else if (calculoDoImc >= 18.5 && calculoDoImc < 25){
        //exibe o status do aluno "peso normal"
        resultado.classList.add('pesoNormal')
        resultado.textContent = "peso normal"

    }else if (calculoDoImc >= 25 && calculoDoImc < 30 ){
        //status "sobrepeso"
        resultado.classList.add('sobrepeso')
        resultado.textContent = "sobrepeso"

    }else if (calculoDoImc >= 30 && calculoDoImc < 35){
        //status "Obesidade grau I"
        resultado.classList.add('obesidade1')
        resultado.textContent = "obesidade grau I"
    
    }else if (calculoDoImc >= 35 && calculoDoImc <= 39.9){
        //status "Obesidade grau II"
        resultado.classList.add('obesidade2')
        resultado.textContent = "obesidade grau II"

    }else if (calculoDoImc >= 40){
        //status "Obesidade grau III"
        resultado.classList.add('obesidade3')
        resultado.textContent = "obesidade grau III"
    }
}

document.getElementById('calcular')
    .addEventListener('click', exibirResultado)
