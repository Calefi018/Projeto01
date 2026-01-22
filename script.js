let tarefas = []

function adicionarTarefa() {
    
    let inputTarefa = document.getElementById("inputTarefa");  
    const tarefa = inputTarefa.value.trim(); 

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Não foi possivel adicionar a tarefa, por favor digite uma tarefa para adicionar a sua lista";  
        mensagem.textContent = mensagemErro;
    }

    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"; 
        mensagem.textContent = mensagemSucesso; 
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""; 
}

function renderizarTarefas() {
    
        const listaTarefas = document.getElementById("listaTarefas"); 

        let i = 0
        for (i; i < tarefas.legth; i++){

            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefa;
            listaTarefas.appendChild(novaTarefa); 
        }

 
}

function mudarNome() {
    let nome = prompt("Qual o seu nome?");
    document.getElementById("title").textContent = ("Olá ") + nome + (" Seja bem-vindo!");
}