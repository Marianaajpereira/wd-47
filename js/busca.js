(function () {

  'use strict'

  $("#busca").on("input", function(){

    var busca = $("#busca").val().trim()

    if(busca){
      $(".cartao").hide().filter(function(){

        return $(this).find("p").text().match(new RegExp(busca,"i"))
      }).show()
    } else {
      $(".cartao").show();
    }
  })
})
()
