//document.querySelector(".novoCartao").addEventListener("submit", function(evento) {

// função main anônima
( function () {

    'use strict'
  var contador = $(".cartao").length

  $(".novoCartao").on("submit", function(evento){

    evento.preventDefault()
//  var conteudo = document.querySelector(".conteudo").value
  var campoConteudo = $(".conteudo")
  var conteudo = campoConteudo.val().trim().replace(/\n/g,"<br>")

  if(!conteudo) {
    alert ("Preencha o campo")
  } else {
    contador++

    var tipoCartao = decideTipoCartao(conteudo)

    var cartao = $("<div>").addClass("cartao").attr("id", "cartao_" + contador).addClass(tipoCartao)
    var opcoesDoCartao = $("<div>").addClass("opcoesDoCartao")
    var btnRemove = $("<button>").addClass("opcoesDoCartao-opcao").addClass("btnRemove").attr("ref", contador).text("X").click(removeCartao)
    var tagConteudo = $("<p>").addClass("cartao-conteudo").append(conteudo)

    opcoesDoCartao.append(btnRemove)
    cartao.append(opcoesDoCartao).append(tagConteudo)

    $(".mural").prepend(cartao)

    campoConteudo.val("")
  }
//  console.log(conteudo);
  })
})
 () // função main executada como anônima

 function decideTipoCartao(conteudo) {
   var quebras = conteudo.split("<br>").length;
   var totalDeLetras = conteudo.replace(/<br>/g, " ").length;
   var palavras = conteudo.replace(/<br>/g, " ").split(" ")
   var maiorPalavra = 0

   palavras.forEach(function(palavra) {
     if(palavra.length > maiorPalavra.length) {
       maiorPalavra = palavra.length
     }
   })

   var tipoCartao = "cartao--textoPequeno" // fonte do texto do cartão será pequena

   if(maiorPalavra < 9 && quebras < 5 && totalDeLetras < 55) {
     tipoCartao = "cartao--textoGrande" // fonte do texto do cartão será grande
   } else if(maiorPalavra < 12 && quebras < 6 && totalDeLetras < 75) {
     tipoCartao = "cartao--textoMedio" // fonte do texto do cartão será média
   }

   return tipoCartao;
 }
