// função main anônima
( function () {

  'use strict'

var btn = document.querySelector("#mudaLayout")
var mural = document.querySelector(".mural")

function mudaTexto() {
  if (mural.classList.contains("mural--linha")) {
    btn.textContent = "Linhas"
  } else {
    btn.textContent = "Blocos"
  }
}

function mudaLayout() {
  mural.classList.toggle("mural--linha")
}

btn.addEventListener("click", mudaTexto)
btn.addEventListener("click", mudaLayout)

})
 () // função main executada como anônima
