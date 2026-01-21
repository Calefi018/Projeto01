 
function adicionarTarefa() {
    // Criação de toda lógica de inserção e alteração de tarefas na lista.

    let mensagemSucesso = "Tarefa adicionada com sucesso!"; // Cria uma variavel com um valor fixo.

    let inputTarefa = document.getElementById("inputTarefa"); //Pega o valor de entrada do usuário.

    let tarefa = inputTarefa.value; //Armazena o valor de input em uma variavel.

    document.getElementById("mensagem").textContent = mensagemSucesso; //Insere o valor do Input na tag <p></p>.

    let listaTarefas = document.getElementById("listaTarefas"); //Declara uma variavel com o elemento pai.

    let novaTarefa = document.createElement("li"); //Declara uma variavel com o elemento filho.

    listaTarefas.appendChild(novaTarefa); //Adiciona o elemento filho (li) dentro do elemento pai.

    novaTarefa.textContent = tarefa; // Insere o valor da variavel na lista criando uma nova LI.

    inputTarefa.value = "" //Altera o valor dentro de input.

    // Criação de lógica para evitar Listas com itens vazios caso o usuário clique no botão sme nenhum texto para inserir.

    if (tarefa == "") {
        let mensagemErro = "Não foi possivel adicionar a tarefa, por favor digite uma tarefa";
        document.getElementById("mensagem").textContent = mensagemErro;
    }
    




}

function mudarNome() {
    let nome = prompt("Qual o seu nome?");
    document.getElementById("title").textContent = ("Olá ") + nome + (" Seja bem-vindo!");
}