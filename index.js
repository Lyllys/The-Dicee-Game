var randomPlayer1 = Math.floor((Math.random() * 6) +1); 

for(let i = 0; i < randomPlayer1 ; i++) {
let div = document.createElement('div');
div.classList.add("balls");
let diceePlayer1 =document.querySelector("#player1");
diceePlayer1.appendChild(div);
}

var randomPlayer2 = Math.floor((Math.random() * 6) +1); 

for(let i = 0; i < randomPlayer2 ; i++) {
    let div = document.createElement('div');
    div.classList.add("balls");
    let diceePlayer2 =document.querySelector("#player2");
    diceePlayer2.appendChild(div);
}

if(randomPlayer1 > randomPlayer2) {
    document.querySelector("h1").innerHTML = "🚩 JOGADOR 1 GANHOU";
} else if(randomPlayer2 > randomPlayer1) {
    document.querySelector("h1").innerHTML = "JOGADOR 2 GANHOU 🚩";
} else{
    document.querySelector("h1").innerHTML = "EMPATE";
}