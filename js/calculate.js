btCalcular.addEventListener("click", calcular);

function calcular() {
    var partida = document.getElementById('eloPartida').value;
    var destino = document.getElementById('eloDestino').value;
    var preco = destino - partida;
    if(partida >= destino){
        alert("Elo de partida maior ou igual ao destino.")
    } else {
        if(preco == 1){
            document.getElementById("custo").innerHTML = "R$ 50,00";
        }
        if(preco == 2){
            document.getElementById("custo").innerHTML = "R$ 100,00";
        }
        if(preco == 3){
            document.getElementById("custo").innerHTML = "R$ 150,00";
        }
        
    }   
}