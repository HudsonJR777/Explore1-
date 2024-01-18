const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
    "Não desanime, continue em frente.",
    "Ou você faz, ou assiste os outros fazer.",
    "Sua maior luta, é contra você mesmo, então continue tentando.",
    "Antes tarde, do que mais tarde!",
    "A sua batalha, é contra você mesmo",
    "A jornada mais incrível começa com um único passo.",
    "Seja a mudança que você deseja ver no mundo.",
    "Pequenos progressos levam a grandes conquistas.",
    "Acredite em você mesmo, e o resto virá naturalmente.",
    "Cada novo dia é uma oportunidade para recomeçar.",
    "Seu potencial é ilimitado; vá além dos seus limites.",
    "A persistência é a chave do sucesso.",
    "Você é mais forte do que pensa e mais capaz do que imagina.",
    "Sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Celebre o progresso, não apenas os resultados finais.",
]



// clicar em fazer pergunta
function fazerPergunta() {
    
    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;
    // sumir a resposta depois  de 3 segundos
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute('disabled')
    }, 3000)
}
