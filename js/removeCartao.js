    'use strict'

//var btnRemove = document.querySelectorAll(".btnRemove")
var btns = document.querySelectorAll(".btnRemove")

for(var i = 0; i < btns.length; i++) {

//  btnRemove.addEventListener("click", removeCartao)
  btns[i].addEventListener("click", removeCartao)
}

function removeCartao() {
//  console.log(this)
//  var cartao = this.parentNode
var numCartao = this.getAttribute("ref")
var cartao = document.querySelector("#cartao_" + numCartao)

cartao.classList.add("cartao--some")
cartao.addEventListener("transitionend",function() {
  cartao.remove()
})

/*setTimeout(function() {
  cartao.remove()
}, 300)*/
//  cartao.style.display = "none"
}
