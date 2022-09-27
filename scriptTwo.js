let firstAmmount = 100;
let ammount = firstAmmount;
let howYouSpent = 200;

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

while (ammount > 0) {
    ammount = ammount - howYouSpent;

    if (ammount < firstAmmount / 2) {
        alert("attenzione hai già speso metà del tuo budget!")
    } else {
        alert("tranquillo, continua a spendere")
    } 

    if (ammount > firstAmmount / 5) {
        alert("attenzione, se spendi ancora non avrai più soldi")
    } else {
        alert("mi dispiace, hai finito tutti i soldi!")
    }
}