let outfit = ['Maglia 1', 'Maglia 2', 'Panta 1', 'Panta 2'];
let all = document.getElementById('card-item');


let magliaOne = 100;
let magliaTwo = 80;
let pantaloneOne = 50;
let pantaloneTwo = 120;
let budgetOne = 400;
let ammount;
document.getElementById("budget").innerHTML = "Hai un budget di:  " + budgetOne + " euro";

function addto() {
    if (ammount = "resultOne") {
        "budget".innerHTML = "Hai un budget di: " + risultatoOne + "euro";
    } else {
        alert("hai finito i soldi, mi spiace")
    }
}

function button1(prezzo) {
    budgetOne -= prezzo;
    document.getElementById("budget").innerHTML = "Hai un budget di: " + budgetOne + " euro";
    alert("Sei sicuro? 100 euro per una maglietta mi sembra un pò tanto!")
    ammount = "resultOne";
}

