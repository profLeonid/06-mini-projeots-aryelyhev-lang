'use strict'

//função para receber as notas e calcular a média do aluno
function calcularMedia(nota1, nota2, nota3){

    //soma todos os valores das notas e divide por 3
    const calculoDaMedia = (nota1 + nota2 + nota3) / 3
    return calculoDaMedia //retorna o resultado da soma
}

//função responsavel por exibir o resultado da soma
function exibirResultado(){

    //cria uma constante, recebe o parametro do html e tranforma para number
    //.value para pegar o valor e não o conteiner
    const nota01 = Number(document.getElementById('nota1').value)
    const nota02 = Number(document.getElementById('nota2').value)
    const nota03 = Number(document.getElementById('nota3').value)

    //constante que recebe o parametro "resultado" que vem do html pelo id
    const resultado = document.getElementById('resultado')
    
    //chama as funções passando os paramentros
    resultado.textContent = calcularMedia(nota01, nota02, nota03)

}
//função responsavel por trocar a cor de acordo com o resultado da media 
function trocarCor(calculoDaMedia) {
    const resultado = document.getElementById('resultado')
    removerClasses()

    if (calculoDaMedia >= 7 ){
        //aprovado
        resultado.classList.add('aprovado')
    }else if (calculoDaMedia >= 5 && calculoDaMedia <= 7){
        //recuperação
        resultado.classList.add('recuperação')
    }else if (calculoDaMedia < 5){
        //reprovado
        resultado.classList.add('reprovado')
    }
}