'use strict'
//use strict serve para mostrar erros no codigo

//função para remover o resultado apto e nao-apto sempre que o usuario for digitar novamente
//para não armazenar o mesmo resultado duas vezes 
function removerClasses(){
    //pega os elementos guardados no resultado
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
}

//função que execulta a ação sempre que alguem clicar 1 vez no botão avaliar
function avaliar(){
    //pega o elemento guardado nos respectivos ids
    const tempo = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')

    removerClasses() //remove as classe após o usuario digitar um numero, para atualizar o resultado sempre
    if (tempo.value < 14){
        resultado.textContent = 'Apto'
        //o className pega a classe na tag e subistitue pelas configurações que ele atribui
        //resultado.className <- apaga as configurações anteriores
        resultado.classList.add('apto') //nesse caso o classList seria o ideal pois ele pega a classe 
                                        //sem apagar as confgurações anteriores
    }else{ 
        resultado.textContent = 'Não Apto'  //adiciona o resultado (apto ou não apto) dentro da caixa resultado 
        resultado.classList.add('nao-apto') //pega a classe, adiciona novos comandos sem ignorar os comandos 
                                            //anteriores, já atribuidos a essa classe
    }
}