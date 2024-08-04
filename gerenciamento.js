adicionarTarefa = document.querySelector('#adicionarTarefa')

mensagem = document.querySelector('#mensagem')

atuzaliarTarefa = document.querySelector('#atuzaliarTarefa')

editar = document.querySelector('#editarTarefa')

h1Atuzaliar = document.querySelector('#h1Atuzaliar')

h1Adicionar = document.querySelector('#h1Adicionar')

excluir = document.querySelector('#excluir')

tabelaTarefa = document.querySelector('#tabelaTarefa')

cadastrarTarefa = document.querySelector('#cadastrarTarefa')

nome = document.querySelector('#nome')

dataEntrega = document.querySelector('#dataEntrega')

tabelaTarefa = document.querySelector('#tabelaTarefa')

quantidadeTarefas = document.querySelector('#quantidadeTarefas')

let tarefas = []
renderQuantidadeTarefas()
atuzaliarTarefa.style.display = 'none'
h1Atuzaliar.style.display = 'none'


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
    limparInput()
    mostrarMensagem('cadastrada com sucesso!!!')
})

function limparInput(){
    nome.value = ''
    dataEntrega.value = ''
}

function renderizarTabela(){
    id = -1
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
                <td><input type="button" value="editar" id="${id++}" onclick="atuzaliarTarefaTable(${id})"><td>
                <td><input type="checkbox" id="${id}"><td>
             </tr>`

            ).join('') }
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

excluir.addEventListener('click',(e) => {
    e.preventDefault()
    deletarTarefa()
    renderizarTabela()
    renderQuantidadeTarefas()
})

function deletarTarefa(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedIds = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedIds.push(parseInt(checkbox.id));
        }
    });

    let contDecremento = 0
    checkedIds.forEach((id) => {
        tarefas.splice((id - contDecremento), 1);
        contDecremento++
    })
}

let idTarefa = null
function atuzaliarTarefaTable(posicao){
    idTarefa = posicao
    nome.value = tarefas[posicao].nome
    dataEntrega.value = tarefas[posicao].dataEntrega
    cadastrarTarefa.style.display = 'none'
    h1Adicionar.style.display = 'none'
    h1Atuzaliar.style.display = 'block'
    atuzaliarTarefa.style.display = 'inline-block'
}

atuzaliarTarefa.addEventListener('click',(e) => {
    e.preventDefault()
    editarTarefa(idTarefa)
    renderizarTabela()
    limparInput()
    idTarefa = null
    cadastrarTarefa.style.display = 'inline-block'
    h1Adicionar.style.display = 'block'
    atuzaliarTarefa.style.display = 'none'
    h1Atuzaliar.style.display = 'none'

})

function inputChecked(){

}

function editarTarefa(posicao){
    tarefas[posicao].nome = nome.value
    tarefas[posicao].dataEntrega = dataEntrega.value
}