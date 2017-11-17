(function () {

  'use strict'

  $("#busca").on("input", function(){

    var busca = $("#busca").val().trim()

    if(busca){
      $(".cartao").hide().filter(function(){

        var buscaRegExp = new RegExp(busca,"i")

        var retorno = $(this).find("p").text().match(buscaRegExp)

       return retorno

      }).show()
    } else {
      $(".cartao").show();
    }
  })
})
()
