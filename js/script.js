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

function button1() {
    let risultatoOne = budgetOne - magliaOne;
    document.getElementById("budget").innerHTML = "Hai un budget di: " + risultatoOne + " euro";
    alert("Hai comprato una bellissima maglia rosa!")
    ammount = "risultatoOne";
    return risultatoOne;
}

function button2() {
    let risultatoTwo = budgetOne - magliaTwo;
    document.getElementById("budget").innerHTML = "Hai un budget di: " + risultatoTwo + " euro";
    alert("Hai comprato dei bellimi pantaloni cargo!");
    return budgetOne;
}

function button3() {
    let risultatoThree = budgetOne - pantaloneOne;
    document.getElementById("budget").innerHTML = "Hai un budget di: " + risultatoThree + " euro";
    alert("Hai comprato dei bellissimi pantaloni verde cachi!");
    return budgetOne;
}

function button4() {
    let risultatoFour = budgetOne - pantaloneTwo;
    document.getElementById("budget").innerHTML = "Hai un budget di: " + risultatoFour + " euro";
    alert("Hai comprato dei pantaloni zebrati!");
    return budgetOne;
}