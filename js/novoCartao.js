//document.querySelector(".novoCartao").addEventListener("submit", function(evento) {
var contador = $(".cartao").length

$(".novoCartao").on("submit", function(evento){

  evento.preventDefault()
//  var conteudo = document.querySelector(".conteudo").value
var campoConteudo = $(".conteudo")
var conteudo = campoConteudo.val().trim()

if(!conteudo) {
  alert ("Preencha o campo")
} else {
  contador++

  var cartao = $("<div>").addClass("cartao").attr("id", "cartao_" + contador)
  var opcoesDoCartao = $("<div>").addClass("opcoesDoCartao")
  var btnRemove = $("<button>").addClass("opcoesDoCartao-opcao").addClass("btnRemove").attr("ref", contador).text("X").click(removeCartao)
  var tagConteudo = $("<p>").addClass("cartao-conteudo").text(conteudo)

  opcoesDoCartao.append(btnRemove)
  cartao.append(opcoesDoCartao).append(tagConteudo)

  $(".mural").prepend(cartao)

  campoConteudo.val("")
}
//  console.log(conteudo);
})
