const mensagem1 = document.querySelector(".mensagem")



const acao = document.querySelector(".acao")
const descricoes = document.querySelectorAll(".descricao")




const precos = document.querySelectorall(".preco")
const comprar = document.querySelector("#comprar")
const botoes2 = document.querySelectorAll( "button")



const section = document.querySelector("section")
const produto1 = document.querySelectorAll("#produto")
const produtoSection = section.querySelectorAll(".produto")
const botao1 = document.querySelector(".botao") 



const titulo1 = document.querySelector("#titulo")
titulo1.textContent = "Minha loja"

const descricao = document.querySelector("#descricao")
descricao.textContent = "Confira nossos produtos"

const produto2 = document.querySelector("#produto")
console.log(produto2.textContent)




const nomeProduto = document.getElementById("nome").value

const mensagem2 = document.getElementById("mensagem")
mensagem2.textContent = "Produto pronto para cadastro"

const resultado  = document.getElementById("resultado")
resultado.textContent = "Produto selecionado: " + nomeProduto


const tituloTexto = document.getElementById("titulo").textContent
console.log(tituloTexto)

const titulo1 = document.querySelector("#titulo")
titulo1.textContent = "Loja de tecnologia"

const mensagem4 = document.querySelector("#mensagem")
mensagem4.textContent = "Produto disponível!"

const produto3 = document.querySelector("#produto")
console.log(produto3.value)


const produto = document.querySelector("#produto")

const preco = document.querySelector("#preco")

const resultado = document.querySelector("#resultado")
resultado.textContent= `O ${produto.textContent} custa R$ ${preco.value}`


const card = document.querySelector("#card")
card.innerHTML = "<h2>Teclado Gamer</h2> <p>Preço: R$ 250</p>"



const titulo = document.querySelector("#titulo")
titulo.textContent = "Meu perfil"

const infoUsuario = document.querySelector("#nome")
const nomeUsuario = infoUsuario.value
const mensagem = document.querySelector("#mensagem")
mensagem.textContent = `Bem-vindo, ${nomeUsuario}!`
const perfil = document.querySelector ("#perfil")
perfil.innerHTML = `<h2>Perfil do usuário</h2> <p>${nomeUsuario}</p>`

const status1 = document.querySelector("#status")

status1.classList.remove("inativo")
status1.classList.add("ativo")


const mensagem = document.querySelector("#mensagem")
let temSucesso = mensagem.classList.contains("sucesso")
console.log(temSucesso)


const status2 = document.querySelector("#status")

if (status.classList.contains("inativo")) {
  status.classList.remove("inativo")
  status.classList.add("ativo")
}

console.log(email.getAttribute("placeholder"))

email.setAttribute("placeholder", "Informe seu e-mail profissional")

const email1 = document.querySelector("#email");
email1.removeAttribute("disabled");


const senha = document.querySelector("#senha");
console.log(senha.getAttribute("type"));

const senha1 = document.querySelector("#senha");
senha1.setAttribute("type", "text");

const botao2 = document.querySelector("#enviar");
botao2.removeAttribute("disabled");

const mensagem = document.querySelector("#mensagem");
mensagem.style.color = "green";

const mensagem = document.querySelector("#mensagem");
mensagem.classList.remove("erro")
mensagem.classList.add("sucesso")
mensagem.textContent = "E-mail válido!"
const email = document.querySelector("#email")
email.removeAttribute("disabled")


const botao3 =  document.querySelector("#botao")
botao3.classList.remove("desativado")
botao3.classList.add("ativo")
botao3.textContent = "Desativado"
const status = document.querySelector("#status")
status.textContent= "Sistema ativado"

const botao4 =  document.querySelector("#botao")

botao4.classList.toggle("ativo")
botao4.classList.toggle("desativado")

const status = document.querySelector("#status")
const botao5 =  document.querySelector("#botao")

status.classList.remove("inativo")
status.classList.add("ativo")
status.textContent = "Sistema ligado"//Da pra fazer assim?

botao5.removeAttribute("disabled")
botao5.textContent = "Desativar sistema"

const resultado1 = document.querySelector("#resultado")
const botao =  document.querySelector("#botao")
botao.addEventListener("click", function(){
    resultado1.textContent= "Olá! Evento executado com sucesso."
})


let clicou = 0
const botao5 = document.querySelector("#botao")
const contador =  document.querySelector("#contador")
botao5.addEventListener("click", function(){
    clicou ++
    contador.textContent=`Você clicou ${clicou} vezes`
})


const botaoAdd = document.querySelector("#adicionar")
const botaoZerar = document.querySelector("#zerar")
const contador1 =  document.querySelector("#contador")
let contagem = 0
botaoAdd.addEventListener("click",function(){
    contagem ++
    contador1.textContent = `Contagem: ${contagem}`

})
botaoZerar.addEventListener("click", function(){
    contagem = 0
    contador1.textContent = `Contagem: ${contagem}`

})

const curso = document.querySelector("#curso")
const resultado2 = document.querySelector("#resultado")
curso.addEventListener("change", function(){
    resultado2.textContent = `Curso Selecionado: ${curso.value}`
})

const nome1 = document.querySelector("#nome")
const botao6 = document.querySelector("#botao")
const resultado3 = document.querySelector("#resultado")
botao6.addEventListener("click", function(){
     resultado3.textContent = `Nome confirmado: ${nome1.value}`
})

const formulario = document.querySelector("#formulario")
const nome2 = document.querySelector("#nome")
const resultado4 = document.querySelector("#resultado")
formulario.addEventListener("submit", function(){
    event.preventDefault();

    resultado4.textContent = `Cadastro recebido: ${nome2.value}`
})

const formulario1 = document.querySelector("#formulario")
const nome3 = document.querySelector("#nome")
const resultado5 = document.querySelector("#resultado")
formulario1.addEventListener("submit", function(event){
    event.preventDefault()
    if(nome3.value === ""){
        resultado5.textContent= "Por favor, digite seu nome."
    }else {
        resultado5.textContent= `Cadastro recebido: ${nome3.value} `
    }
})


const produtos = document.querySelector("#produtos")
const resultado6 = document.querySelector("#resultado")
produtos.addEventListener("click", function(event){
    resultado6.target.textContent= `Produto Selecionado ${produtos.value}`
})


const resultado7 = document.querySelector("#resultado")
const botao7= document.querySelector("#botao")
const nome = document.querySelector("#nome")
botao7.addEventListener("click", function(){
    resultado7.textContent = `Olá, ${nome.value}! `
})

const resultado8= document.querySelector("#resultado")
const preco1 = document.querySelector("#preco")
preco1.addEventListener("input", function(){
    resultado8.textContent = `Preco digitado: R$ ${preco1.value}`
})

const resultado9= document.querySelector("#resultado")
const linguagem2 = document.querySelector("#linguagem")
linguagem2.addEventListener("change", function(){
    resultado9.textContent = `Linguagem escolhida: ${linguagem2.value}`
})

const resultado10 = document.querySelector("#resultado")
const idade = document.querySelector("#idade")
const botao8 = document.querySelector("#verificar")
botao8.addEventListener("click", function(){
    if(idade.value>=18){
        resultado10.textContent = 'Você é maior de idade'
    }
    else {
        resultado10.textContent = "Você é menor de idade"
    }
})

const resultado11 = document.querySelector("#resultado")
const formulario2 = document.querySelector("#formulario")
const nome4= document.querySelector("#nome")

formulario2.addEventListener("submit", function(event){
    event.preventDefault()
    resultado11.textContent = `Bem-vindo, ${nome4.value}!`
} )


const botoes = document.querySelectorAll("button")
const resultado12 = document.querySelector("#resultado")

botoes.forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        resultado12.textContent = `Curso selecionado: ${event.target.textContent}`
    })
})




//Selecione #cursos e #resultado.
//Use apenas um addEventListener("click", ...), registrado na div.
//Use event.target.textContent para mostrar o curso selecionado.
//Não use querySelectorAll() nem forEach().

const cursos = document.querySelector("#cursos")
const resultado14 = document.querySelector("#resultado")

cursos.addEventListener("click", function(event){
  resultado14.textContent =   event.target.textContent
})



const lista = document.querySelector("#produtos")
const produto6 = document.createElement("li")
produto6.textContent="Teclado"
lista.append(produto6)


const lista1 = document.querySelector("#produtos")

const produtoTeclado = document.createElement("li")
produtoTeclado.textContent="Teclado"
const produtoMouse = document.createElement("li")
produtoMouse.textContent="Mouse"
const produtoMonitor = document.createElement("li")
produtoMonitor.textContent="Monitor"

lista1.append(produtoTeclado, produtoMouse, produtoMonitor)

const sql = document.querySelector("#tarefa2")
sql.remove()


const tarefa = document.querySelector("#tarefa")
const botaoADD = document.querySelector("#adicionar")
const lista2 = document.querySelector("#lista")

botaoADD.addEventListener("click", function() {
    const tarefaAdd = document.createElement("li")
    tarefaAdd.textContent = tarefa.value
    lista2.append(tarefaAdd)
})

const tarefa1 = document.querySelector("#tarefa")
const botaoADD2 = document.querySelector("#adicionar")
const lista3 = document.querySelector("#lista")

let tarefaEmEdicao = null

botaoADD2.addEventListener("click", function() {
    const textoTarefa = tarefa1.value.trim()

    if (textoTarefa !== "") {
        if (tarefaEmEdicao !== null) {
            tarefaEmEdicao.textContent = textoTarefa 
            tarefaEmEdicao = null                   
            tarefa1.value = ""                      
            return                                  
        }

        // Criando nova tarefa
        const tarefaAdd2 = document.createElement("li")

        const spanTexto = document.createElement("span")
        spanTexto.textContent = textoTarefa

        // btn editar
        const botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar"
        botaoEditar.addEventListener("click", function(){
            tarefa1.value = spanTexto.textContent
            tarefaEmEdicao = spanTexto 
            tarefa1.focus()            
        })

        // btn remover
        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Excluir"
        botaoRemover.addEventListener("click", function() {
            tarefaAdd2.remove()
            
            if (tarefaEmEdicao === spanTexto) {
                tarefaEmEdicao = null
                tarefa1.value = ""
            }
        })

        // btn concluido
        const botaoConcluido = document.createElement("button")
        botaoConcluido.textContent = "Concluido"
        botaoConcluido.addEventListener("click", function(){
            if(tarefaAdd2.style.textDecoration === "line-through"){
                tarefaAdd2.style.textDecoration = "none"
            } else {
                tarefaAdd2.style.textDecoration = "line-through"
            }
        })

        tarefaAdd2.append(spanTexto, botaoEditar, botaoRemover, botaoConcluido)
        lista3.append(tarefaAdd2)

        tarefa1.value = ""
    } else {
        console.log("É preciso escrever uma tarefa")
    }
})

const formulario3 = document.querySelector("#formulario")
const email2 = document.querySelector("#email")

formulario3.addEventListener("submit", function(event) {
    event.preventDefault()

    if (email2.checkValidity()) {
        console.log("Email válido")
    } else {
        console.log("Email inválido")
    }
})

const formulario4 = document.querySelector("#formulario")
const email3 = document.querySelector("#email")

formulario4.addEventListener("submit", function(event) {
    event.preventDefault()

    email3.setCustomValidity("")

    if (!email3.value.trim()) {
        email3.setCustomValidity("O e-mail é obrigatório")
    } else if (!email3.checkValidity()) {
        email3.setCustomValidity("Digite um e-mail válido")
    } else {
        console.log("E-mail válido")
    }
})

const tarefa9 = document.querySelector("#tarefa")
const botaoADD9 = document.querySelector("#adicionar")
const lista9 = document.querySelector("#lista")

// Variável para guardar a referência do texto da tarefa que está sendo editada
let tarefaEmEdicao2 = null

botaoADD2.addEventListener("click", function() {
    const textoTarefa = tarefa1.value.trim()

    if (textoTarefa !== "") {
        // Se estamos editando uma tarefa existente
        if (tarefaEmEdicao !== null) {
            tarefaEmEdicao.textContent = textoTarefa // Atualiza o texto
            tarefaEmEdicao = null                   // Limpa o estado de edição
            tarefa1.value = ""                      // Limpa o input
            return                                  // Interrompe para não criar nova tarefa
        }

        // Criando nova tarefa
        const tarefaAdd2 = document.createElement("li")

        // Usamos um span para separar o texto dos botões
        const spanTexto = document.createElement("span")
        spanTexto.textContent = textoTarefa

        // btn editar
        const botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar"
        botaoEditar.addEventListener("click", function(){
            tarefa1.value = spanTexto.textContent
            tarefaEmEdicao = spanTexto // Marca este span como o alvo da edição
            tarefa1.focus()            // Opcional: joga o cursor direto para o input
        })

        // btn remover
        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Excluir"
        botaoRemover.addEventListener("click", function() {
            tarefaAdd2.remove()
            // Se a tarefa que estava sendo editada for excluída, cancela o modo de edição
            if (tarefaEmEdicao === spanTexto) {
                tarefaEmEdicao = null
                tarefa1.value = ""
            }
        })

        // btn concluido
        const botaoConcluido = document.createElement("button")
        botaoConcluido.textContent = "Concluido"
        botaoConcluido.addEventListener("click", function(){
            if(tarefaAdd2.style.textDecoration === "line-through"){
                tarefaAdd2.style.textDecoration = "none"
            } else {
                tarefaAdd2.style.textDecoration = "line-through"
            }
        })

        // juncao (incluindo o span e o botão de editar)
        tarefaAdd2.append(spanTexto, botaoEditar, botaoRemover, botaoConcluido)
        lista3.append(tarefaAdd2)

        tarefa1.value = ""
    } else {
        console.log("É preciso escrever uma tarefa")
    }
})

const formulario8 = document.querySelector("#formulario")
const email8 = document.querySelector("#email")
const mensagem = document.querySelector("#mensagem")

// Validação em tempo real
email8.addEventListener("input", function() {

    // Limpa erros personalizados anteriores
    email8.setCustomValidity("")

    if (email8.value.trim() === "") {
        mensagem.textContent = ""
    }
    else if (!email8.checkValidity()) {
        mensagem.textContent = "E-mail inválido"
    }
    else {
        mensagem.textContent = "Formato de e-mail válido!"
    }
})

// Envio do formulário
formulario8.addEventListener("submit", function(event) {
    event.preventDefault()

    email8.setCustomValidity("")

    if (!email8.checkValidity()) {
        email8.setCustomValidity("Digite um e-mail válido")
        email8.reportValidity()
    }
    else {
        mensagem.textContent = "Cadastro realizado com sucesso!"
    }
})

const formulario5 = document.querySelector("#formularioCadastro")
const nome9 = document.querySelector("#nome")
const senha5 = document.querySelector("#senha")
const mensagemSenha = document.querySelector("#mensagemSenha")
const resultado15 = document.querySelector("#resultado")


nome9.addEventListener("input", function(event){

    if (nome9.value.trim() === "") {
        resultado15.textContent ="Nome invalido"
    }
})

const titulo7 = document.querySelector("#titulo")
const botoesProdutos = document.querySelectorAll(".produto")
const descricao10 = document.querySelector("#descricao")

titulo7.textContent = "Produtos disponíveis"


botoesProdutos.forEach((item) =>{
  addEventListener("click",function(){
    descricao10.textContent = `Produto selecionado: ${item.textContent}`
  })
})

const titulo11 = document.querySelector("#titulo")
const inputTarefa = document.querySelector("#tarefa")
const botaoAdicionar = document.querySelector("#adicionar")
const lista8 = document.querySelector("#lista")
const contador6 = document.querySelector("#contador")

botaoAdicionar.addEventListener("click", function(){
    if(inputTarefa.value.trim() !== ""){
        const tarefa2 = document.createElement("li")
        tarefa2.textContent = inputTarefa.value
        lista8.append(tarefa2)
        contador6.textContent = `Tarefas: ${lista8.children.length}`
        inputTarefa.value = ""
    } 
})
////////////////////////////////////////////////////////////////////////////////////
//01
// SELETORES
const titulo = document.querySelector("#titulo")
const produto5 = document.querySelector("#produto")
const nome5 = document.querySelector("#nome")
const botaoFavoritar = document.querySelector("#favoritar")
const botaoDesativar = document.querySelector("#desativar")
// 1. FAVORITAR PRODUTO
// Ao clicar em Favoritar:
// - Adicione a classe "favorito" ao elemento produto.
// - Altere o texto do botão para "Remover dos favoritos".
// - Se clicar novamente, remova a classe e restaure o texto original.

botaoFavoritar.addEventListener("click", function(){
    if (!produto5.classList.contains("favorito")){
        produto5.classList.toggle("favorito")
        botaoFavoritar.textContent ="Remover dos favoritos"
        produto5.style.opacity = "0.5"
    }else{
        produto5.classList.toggle("favorito")
        botaoFavoritar.textContent ="Favoritar"
        produto5.style.opacity = "1"
    }
})

// 2. DESATIVAR PRODUTO
// Ao clicar em Desativar:
// - Adicione o atributo "disabled" ao botãoFavoritar usando setAttribute().
// - Altere o texto do botãoDesativar para "Produto desativado".

botaoDesativar.addEventListener("click", function(){
        if (botaoFavoritar.getAttribute("disabled") !== null) {
        botaoFavoritar.removeAttribute("disabled")
        botaoDesativar.textContent = "Desativar produto"

    } else {
        botaoFavoritar.setAttribute("disabled", "")
        botaoDesativar.textContent = "Produto desativado"
    }
})

// 3. VERIFICAR ATRIBUTOS
// - Utilize getAttribute() para verificar o atributo "disabled".
// - Utilize removeAttribute() para reativar o botãoFavoritar.
// - Implemente também a possibilidade de reativar o produto.


const email6 = document.querySelector("#email")
const botaoEnviar = document.querySelector("#enviar")

// 1. Utilize setAttribute() para adicionar o atributo required ao input.

// 2. Altere o placeholder para "Informe seu e-mail".

// 3. Utilize getAttribute() para obter o valor do placeholder
// e armazene o resultado em uma variável.

// 4. Utilize getAttribute() para verificar se o atributo required existe.
// Armazene o resultado em outra variável.

// 5. Exiba os dois resultados utilizando console.log().
const email = document.querySelector("#email")

// Altera o placeholder
email.setAttribute("placeholder", "Informe seu e-mail")

// Adiciona o atributo required
email.setAttribute("required", "")

// Altera o tipo do input
email.setAttribute("type", "text")

const placeholder = email.getAttribute("placeholder")

console.log(placeholder)

const resultado = email.getAttribute("disabled")

console.log(resultado)

const botao = document.querySelector("#comprar")

// Adiciona o atributo
botao.setAttribute("disabled", "")

// Consulta o atributo
console.log(botao.getAttribute("disabled"))


const usuario = document.querySelector("#usuario")
const confirmar = document.querySelector("#confirmar")



const produto9 = document.querySelector("#produto")
const preco9 = document.querySelector("#preco")
const cadastrar = document.querySelector("#cadastrar")
const resultado = document.querySelector("#resultado")
const erro = document.querySelector("#erro")

// 1. Adicione um evento de clique ao botão.
cadastrar.addEventListener("click", function(){
    // 2. Capture o nome do produto e o preço digitados.
    
    // 3. Utilize trim() para remover espaços desnecessários
    // do início e do final do nome.
    const nomeProduto = produto9.value.trim()
    const valorPreco = preco9.value
    if(nomeProduto === "" || valorPreco ===""){
        // 4. Se algum dos campos estiver vazio, mostre
        // uma mensagem de erro utilizando textContent.
        erro.textContent ="Erro, campos nao preenchidos "
    } else {
        // 5. Caso estejam preenchidos, crie um elemento HTML
        // contendo o nome e o preço do produto.
        const PrecoProduto = document.createElement("p")
        PrecoProduto.textContent =`Produto: ${nomeProduto} Valor: ${valorPreco}`
        // 6. Insira esse elemento dentro de resultado.
        resultado.append(PrecoProduto)
        // 7. Após cadastrar, limpe os dois campos utilizando value.
        produto9.value= ""
        preco9.value = ""
        erro.textContent =""
    }
})


const produto8 = document.querySelector("#produto")
const favoritar = document.querySelector("#favoritar")
const status = document.querySelector("#status")

favoritar.addEventListener("click", function() {

    // 1. Verifique se o produto já possui a classe "favorito".
    if(!produto8.classList.contains("favorito")){
        // 2. Se não possuir:
        // - Adicione a classe "favorito".
        produto8.classList.add("favorito")
        // - Altere o texto do botão para "Remover dos favoritos".
        favoritar.textContent ="Remover dos favoritos"
        // - Atualize o status para "Este produto é favorito."
        status.textContent ="Este produto é favorito."
    }else{
        // 3. Se já possuir:
        // - Remova a classe "favorito".
        produto8.classList.remove("favorito")
        // - Altere o texto do botão para "Adicionar aos favoritos".
        favoritar.textContent ="Adicionar aso favoritos"
        // - Atualize o status para "Este produto não é favorito."
        status.textContent ="Este prodoto nao é favorito"
    }
})


const produto6 = document.querySelector("#produto")
const disponibilidade = document.querySelector("#disponibilidade")
const mensagem = document.querySelector("#mensagem")

disponibilidade.addEventListener("click", function() {

    // 1. Verifique se o botão possui o atributo "disabled".
    if(disponibilidade.classList.contains("disabled")){
        // 2. Se possuir:
        // - Remova o atributo "disabled".
        disponibilidade.classList.remove("disabled")
        // - Adicione a classe "disponivel" ao produto.
        produto6.classList.add("disponivel")
        // - Altere o texto do botão para "Disponível".
        disponibilidade.textContent = "Disponível"
        // - Atualize a mensagem para "Produto disponível.".
        mensagem.textContent = "Produto Disponível"
    }else {
        // 3. Se não possuir:
        // - Adicione o atributo "disabled".
        disponibilidade.classList.add("disabled")
        // - Remova a classe "disponivel".
        produto6.classList.remove("disponivel")
        // - Altere o texto do botão para "Indisponível".
        disponibilidade.textContent="Indisponível"
        // - Atualize a mensagem para "Produto indisponível.".
        mensagem.textContent ="Produto indisponível."
    }

    if(disponibilidade.classList.contains("disponível")){
        // 4. Quando estiver disponível, altere a cor do texto
        // da mensagem para verde usando element.style.
        
    }

    // 5. Quando estiver indisponível, altere a cor
    // do texto da mensagem para vermelho.

})

