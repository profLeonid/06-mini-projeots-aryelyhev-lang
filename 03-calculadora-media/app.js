'use strict'

//função responsavel por remover as classes para não gerar erro
//ao tentar realizar o calculo da media outra vez
function removerClasses() {

    //pega o conteiner resultado e remove a classe anterior
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
}

//função para realizar o calculo da media
//recebe variaveis criadas para serem usadas apenas no calcula media
function calcularMedia(primeiraNota, segundaNota, terceiraNota) {

    //soma todos os valores das notas e divide por 3
    const calculoDaMedia = (primeiraNota + segundaNota + terceiraNota) / 3
    return calculoDaMedia //retorna o resultado da soma
}

//função responsavel por exibir o resultado da soma
function exibirResultado() {

    //cria uma constante, recebe o parametro do html e tranforma para number
    //.value para pegar o valor e não o conteiner
    const nota01 = Number(document.getElementById('nota1').value)
    const nota02 = Number(document.getElementById('nota2').value)
    const nota03 = Number(document.getElementById('nota3').value)

    //constante que recebe o parametro "resultado" que vem do html pelo id
    const resultado = document.getElementById('resultado')

    //cria uma variavel "media" e passa os parametros nota1 2 e 3
    const media = calcularMedia(nota01, nota02, nota03)
    resultado.textContent = media

    //chama apenas a função "trocar cor"
    //passando o parametro "media" que guarda
    //o conteiner "resultado"
    trocarCor(media)

}

//função responsavel por trocar a cor de acordo com o resultado da media 
//recebe o return calculoDaMedia
function trocarCor(calculoDaMedia) {

    //pega o elemento guardado no "resuldado" pelo id
    const resultado = document.getElementById('resultado')

    removerClasses() //chama a função para remover o resultado depois qu trocar a cor

    //condicional que atribui o status das notas com base na media final
    if (calculoDaMedia >= 7) {
        //status aprovado
        //se a média for suficiente, adiciona a classe do CSS "aprovado" para mudar a cor/estilo
        //e atualiza o texto exibido na tela para "aprovado"
        //ao inves de exibir o resultado do calulo da media
        resultado.classList.add('aprovado')
        resultado.textContent = "aprovado"

    } else if (calculoDaMedia >= 5 && calculoDaMedia < 7) {
        //status recuperação
        resultado.classList.add('recuperacao')
        resultado.textContent = "recuperação"

    } else if (calculoDaMedia < 5) {
        //status reprovado
        resultado.classList.add('reprovado')
        resultado.textContent = "reprovado"
    }
}

//pega o conteiner "calcular"
//atribui para ele 1 click e chama o exibir resultado
document.getElementById('calcular')
    .addEventListener('click', exibirResultado)