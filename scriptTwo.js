// let firstAmmount = 100;
// let ammount = firstAmmount;
// let howYouSpent = 200;

// while (ammount > 0) {
//     ammount = ammount - howYouSpent;

//     if (ammount > 0) {
//         console.log(ammount);
//     }
//     if (ammount < firstAmmount / 2 || ammount > firstAmmount / 4) {
//         alert("Attenzione: hai già speso metà del tuo budget iniziale. Non spendere altri soldi, zio")
//     } else {
//         alert("Zio hai speso tutto il tuo budget. Sei senza soldi!")
//     }
// }

// while (ammount > 0) {
//     ammount = ammount - howYouSpent;

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

let budget = 500;

function azzera() {
    for (let i = budget; i > 0; i--) {
        if (i === 300) {
            document.getElementById("budget-metà").innerHTML = "Attenzione, sei a metà del tuo budget";
        } else {
            ""
        }
        if (i === 600) {
            document.getElementById("budget-finito").innerHTML = "Hai finito il budget";
        }
    }
}
