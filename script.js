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