// let firstAmmount = 100;
// let ammount = firstAmmount;
// let howMuchYouSpent = 200;

// while (ammount > 0) {
//     ammount = ammount - howMuchYouSpent;
//     console.log(ammount);

//     if (ammount < firstAmmount / 2) {
//         alert("attenzione hai già speso metà del tuo budget!")
//     } else {
//         alert("tranquillo, continua a spendere")
//     } 

//     if (ammount > firstAmmount / 5) {
//         alert("attenzione, se spendi ancora non avrai più soldi")
//     } else {
//         alert("mi dispiace, hai finito tutti i soldi!")
//     }
// }
















let budget = 400;

function azzera() {
    for (let i = budget; i >= 0; i--) {
        if (i === 200) {
            document.getElementById("budget-metà").innerHTML = "Attenzione, sei a metà del tuo budget";
        } else {
            ""
        }
        if (i === 0) {
            document.getElementById("budget-finito").innerHTML = "Hai finito il budget";
        }
    }
}

azzera();






