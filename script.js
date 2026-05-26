function adicionarTarefa() {

    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="concluirTarefa(this)">
            ${texto}
        </span>

        <button onclick="removerTarefa(this)">
            X
        </button>
    `;

    lista.appendChild(li);

    input.value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove();
}

function concluirTarefa(tarefa) {

    if (tarefa.style.textDecoration === "line-through") {
        tarefa.style.textDecoration = "none";
    } else {
        tarefa.style.textDecoration = "line-through";
    }

}
document.addEventListener('DOMContentLoaded', function() {

    
    const botaoLimparTudo = document.getElementById('btn-limpar-tudo');

    
    const listaDeTarefas = document.getElementById('nome-do-id-da-lista-aqui') || document.querySelector('ul');

    
    if (botaoLimparTudo) {
        botaoLimparTudo.addEventListener('click', function() {
            
            
            if (listaDeTarefas && listaDeTarefas.children.length > 0) {
                
                const confirmar = confirm("Tem certeza que deseja apagar todas as tarefas?");
                
                if (confirmar) {
                   
                    listaDeTarefas.innerHTML = '';
                    
                    
                    localStorage.removeItem('nome-da-chave-do-localstorage-aqui');
                    
                    alert("Lista limpa com sucesso!");
                }
            } else {
                alert("A lista já está vazia ou não foi encontrada no código.");
            }
        });
    } else {
        console.error("Botão 'Limpar Tudo' não foi encontrado. Verifique se o ID 'btn-limpar-tudo' está correto no HTML.");
    }
});