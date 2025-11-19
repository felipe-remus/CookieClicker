const quantcookies = document.querySelector("#quant-cookies")
const imgcookie = document.querySelector("#img-cookie")

//valor do placar
let valorQuantCookies = 0
quantcookies.value = valorQuantCookies

imgcookie.addEventListener("click", atualizarQuantCookies)

function atualizarQuantCookies(){
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + 1
    //Mostrando novo valor do placar
    quantcookies.value = valorQuantCookies
}