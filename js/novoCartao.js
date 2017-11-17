//document.querySelector(".novoCartao").addEventListener("submit", function(evento) {

// função main anônima
( function () {

    'use strict'

  $(".novoCartao").on("submit", function(evento){

    evento.preventDefault()
//  var conteudo = document.querySelector(".conteudo").value
  var campoConteudo = $(".conteudo")
  var conteudo = campoConteudo.val().trim().replace(/\n/g,"<br>")

  if(!conteudo) {

    alert ("Preencha o campo")

  } else {

    controladorDeCartao.addCard(conteudo)

    campoConteudo.val("")
  }
//  console.log(conteudo);
  })
})
 () // função main executada como anônima
