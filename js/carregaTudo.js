var usuario = "mariana.ajpereira@hotmail.com"

$.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
{usuario: usuario},

    function(res) {

      var cartoes = res.cartoes
      console.log(cartoes.length + " carregados em " + res.usuario)

      cartoes.forEach(function(cartao) {
        controladorDeCartao.addCard(cartao.conteudo)
      })
    })
