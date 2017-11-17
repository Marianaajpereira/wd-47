(function() {

var contador = $(".cartao").length

function ehPraEditar(cartao) {
  console.log("ehPraEditar")
  var liberado = cartao.find("p").attr("contenteditable")
    if(liberado == "true") {
      cartao.find("p").attr("contenteditable", "false")
      $(".mural").trigger("precisaSincronizar")
    } else {
      cartao.find("p").attr("contenteditable", "true")
    }
}

function adicionaCartao(conteudo, cor) {
  contador++

  var tipoCartao = decideTipoCartao(conteudo)

  var cartao = $("<div>")
  .css("background-color", cor)
  .addClass("cartao")
  .attr("id", "cartao_" + contador)
  .addClass(tipoCartao)
  .click(function (event) {
    var elementoClicado = $(event.target)
    var cartao = $(this)
    if(elementoClicado.hasClass("opcoesDoCartao-edita")) {
      ehPraEditar(cartao)
    }


  })
  var opcoesDoCartao = $("<div>").addClass("opcoesDoCartao")
  var btnRemove = $("<button>").addClass("opcoesDoCartao-opcao").addClass("btnRemove").attr("ref", contador).text("X").click(removeCartao)
  var tagConteudo = $("<p>").addClass("cartao-conteudo").append(conteudo)
  var btnEdita = $("<button>").addClass("opcoesDoCartao-opcao ").addClass("opcoesDoCartao-edita").attr("ref", contador)

  opcoesDoCartao.append(btnRemove).append(btnEdita)
  cartao.append(opcoesDoCartao).append(tagConteudo)

  $(".mural").prepend(cartao)

}
window.controladorDeCartao = {
  addCard: adicionaCartao,
  decideTipoCartao: decideTipoCartao,
  idDoUltimoCartao: function() {
    return contador
  }
}

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
})
()
