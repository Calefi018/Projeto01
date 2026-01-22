 
function adicionarTarefa() {
    // Criação de toda lógica de inserção e alteração de tarefas na lista.

    let inputTarefa = document.getElementById("inputTarefa"); //Pega o valor de entrada do usuário.

    const tarefa = inputTarefa.value.trim(); //Armazena o valor de input em uma variavel. O comando .trim() remove os espaços em branco do texto, no incio e no final de um texto inteiro.

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Não foi possivel adicionar a tarefa, por favor digite uma tarefa para adicionar a sua lista";
        
        mensagem.textContent = mensagemErro;
    }

    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"; // Cria uma variavel com um valor fixo.

        mensagem.textContent = mensagemSucesso; //Insere o valor do Input na tag <p></p>. Mensagem de tarefa adicionada com sucesso.

        const listaTarefas = document.getElementById("listaTarefas"); //Declara uma variavel com o elemento pai.

        let novaTarefa = document.createElement("li"); //Declara uma variavel com o elemento filho.

        listaTarefas.appendChild(novaTarefa); //Adiciona o elemento filho (li) dentro do elemento pai.

        novaTarefa.textContent = tarefa; // Insere o valor da variavel na lista criando uma nova LI.
    }

    inputTarefa.value = ""; //Limpa o valor dentro de input.
    
}

// Função para alterar o nome de usuário na tela inicial.
function mudarNome() {
    let nome = prompt("Qual o seu nome?");
    document.getElementById("title").textContent = ("Olá ") + nome + (" Seja bem-vindo!");
}