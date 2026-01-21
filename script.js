//let titulo = "Cristian" // Declarando variavel
// document.getElementById("title").textContent = ("Olá, seja bem-vindo ") + titulo // Inserindo o conteudo da variavel


 
function mudarNome() {
    let mensagem = "Tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById("inputTarefa") //Pega o valor de entrada do usuário
    let tarefa = inputTarefa.value //Armazena o valor de input em uma variavel
    document.getElementById("mensagem").textContent = mensagem; //Insere o valor do Input na tag <p></p>

    let listaTarefas = document.getElementById("listaTarefas") //Declara uma variavel com o elemento pai
    let novaTarefa = document.createElement("li") //Declara uma variavel com o elemnto filho

    listaTarefas.appendChild(novaTarefa) //Adiciona o elemento filho (li) dentro do elemento pai

    novaTarefa.textContent = tarefa

    console.log(novaTarefa)
    inputTarefa.value = "" //Altera o valor dentro de input
}
