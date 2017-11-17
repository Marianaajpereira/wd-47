$("#sync").click(function() {
  $("#sync").removeClass("botaoSync--sincronizado")
  $("#sync").addClass("botaoSync--esperando")
// Array de objetos
  var cartoes = []

  $(".cartao").each(function() {
    var cartao = {
      conteudo: $(this).find("p").html(),
      cor: $(this).css("background-color")
    }
    cartoes.push(cartao)
  })

  // Depois que pegou o conteudo
  var mural = {
    usuario: "mariana.ajpereira@hotmail.com",
    cartoes: cartoes
  }

  $.ajax({
    url: "https://ceep.herokuapp.com/cartoes/salvar",
    method: "POST",
    data: mural,
    success: function(respostaDoServer) {
      $("#sync").addClass("botaoSync--sincronizado")
      console.log("foram salvos: " + respostaDoServer.quantidade)

    },
    error: function(respostaDoServer) {
      $("#sync").addClass("botaoSync--deuRuim")
      console.log("Não foi possível salvar o mural")
    },
    complete: function (respostaDoServer) {
      $("#sync").removeClass("botaoSync--esperando")
    }
  })
})
