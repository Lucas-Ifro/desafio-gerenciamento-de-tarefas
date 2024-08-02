adicionarTarefa = document.querySelector('#adicionarTarefa')

mensagem = document.querySelector('#mensagem')

atuzaliarTarefa = document.querySelector('#atuzaliarTarefa')

editar = document.querySelector('#editarTarefa')

tabelaTarefa = document.querySelector('#tabelaTarefa')

cadastrarTarefa = document.querySelector('#cadastrarTarefa')

nome = document.querySelector('#nome')

dataEntrega = document.querySelector('#dataEntrega')

tabelaTarefa = document.querySelector('#tabelaTarefa')

quantidadeTarefas = document.querySelector('#quantidadeTarefas')

let tarefas = []
renderQuantidadeTarefas()

const addTarefa = (nome, dataEntrega) => {
    
    let tarefa = {
        nome : nome,
        dataEntrega : dataEntrega,
    }

    tarefas.push(tarefa)
}

cadastrarTarefa.addEventListener('click', (e) => {
    e.preventDefault()
    addTarefa(nome.value, dataEntrega.value)
    renderQuantidadeTarefas()
    renderizarTabela()
    mostrarMensagem('cadastrada com sucesso!!!')
})

editar.addEventListener('click',(e) => {
    e.preventDefault()
    atuzaliarTarefaTable(0)
})

function renderizarTabela(){
    id = 0
    tabelaTarefa.innerHTML = `
    <p>Tabela de Livros</p>

    <table>
        <tr>
            <th>nome</th>
            <th>dataEntrega</th>
            <th>Editar</th>
            <th>Deletar</th>
        <th>
        ${tarefas.map(tarefas => 
            `<tr>
                <td>${tarefas.nome}</td>
                <td>${tarefas.dataEntrega}</td>
                <td><input type="button" value="editar" id="editarTarefa"><td>
                <td><input type="checkbox" id="Tarefa-${id++}"><td>
             </tr>`
            ).join('')}
    <table>`
}

function renderQuantidadeTarefas(){
    quantidadeTarefas.innerText = `${tarefas.length}`
}

function mostrarMensagem(texto){
    mensagem.style.display = 'block'
    mensagem.innerHTML = texto

    setTimeout(() => {
            mensagem.style.display = 'none'
    },3000)
}

function deletarTarefa(posicao){
    tarefas.splice(tarefas.indexOf(posicao), 1);
}

function atuzaliarTarefaTable(posicao){
    nome.value = tarefas[posicao].nome
    dataEntrega.value = tarefas[posicao].dataEntrega
}

function editarTarefa(posicao){
    tarefas[posicao].nome = nome
    tarefas[posicao].dataEntrega = dataEntrega
}