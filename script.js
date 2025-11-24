const quantcookies = document.querySelector("#quant-cookies");
const imgCookie = document.querySelector("#img-cookie");
const imgCursor = document.querySelector("#img-cursor");
const imgVovo = document.querySelector("#img-vovo");
const valorCursor = document.querySelector("#valor-cursor > div");
const valorVovo = document.querySelector("#valor-vovo > div");

//valor do placar
let cookiesPorSegundo = 0;
let cookiesPorClick = 1;
let valorQuantCookies = 0;

quantcookies.value = valorQuantCookies;

imgCookie.addEventListener("click", atualizarJogo);

imgCursor.addEventListener("click", comprarCursor);

imgVovo.addEventListener("click", comprarVovo);

setInterval(atualizarQuantCookies, 1000);

setInterval(atualizarView, 1000);

function atualizarQuantCookies() {
    
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + cookiesPorSegundo;

    //Mostrando novo valor do placar
    quantcookies.value = valorQuantCookies;
}

function comprarCursor() {
    if(imgCursor.disponivel) {
        // 1. quanto custa o cursor
    const valor = Number(valorCursor.innerText)

    // 2. desconto dos meus cookies o preco do cursor
    valorQuantCookies = valorQuantCookies - valor;

    // 3. aumentamos cookies por segundo em 1
    cookiesPorSegundo = cookiesPorSegundo + 1

    // 4. subri o valor do cursor
    // valor (atual) + 5
    valorCursor.innerText = valor + 5

    atualizarView()
    }  
}

function comprarVovo() {
    if(imgVovo.disponivel) {
         // 1. quanto custa o cursor
    const valor = Number(valorVovo.innerText)

    // 2. desconto dos meus cookies o preco do cursor
    valorQuantCookies = valorQuantCookies - valor;

    // 3. aumentamos cookies por segundo em 1
    cookiesPorSegundo = cookiesPorSegundo + 5

    // 4. subri o valor do cursor
    // valor (atual) + 25
    valorVovo.innerText = valor + 25

    atualizarView()
    }
}

function atualizarModel() {
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + cookiesPorClick;

    //Mostrando novo valor do placar
    quantcookies.value = valorQuantCookies;
}

function atualizarView() {
    const valorDoCursor = Number(valorCursor.innerText)
    const valorDaVovo = Number(valorVovo.innerText)

    if (valorQuantCookies >= valorDoCursor) {
        imgCursor.disponivel = true
        imgCursor.style.borderColor = "blue";
    } else {
        imgCursor.disponivel = false
        imgCursor.style.borderColor = "gray"
    }

    if (valorQuantCookies >= valorDaVovo) {
        imgVovo.disponivel = true
        imgVovo.style.borderColor = "blue";
    } else {
        imgVovo.disponivel = false
        imgVovo.style.borderColor = "gray"
    }
}

function atualizarJogo() {
    atualizarModel()
    atualizarView()
}
