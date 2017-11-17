(function() {

  'use strict'

  $("#ajuda").on("click", function() {
/*    var ajudas = [
      {conteudo: "Você pode buscar os cartões", cor: "red"},
      {conteudo: "Você pode criar um cartão novo", cor: "orange"},
      {conteudo: "Remover os cartões", cor: "green"}
    ]

    var cores = [
      "orange",
      "red",
      "green"
    ]*/

    $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
        function(res) {
          console.log(res)

          res.instrucoes.forEach(function(instrucao) {
            controladorDeCartao.addCard(instrucao.conteudo, instrucao.cor)
          })
        })
  })
})
()
