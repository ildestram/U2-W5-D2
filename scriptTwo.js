let firstAmmount = 500;
let ammount = firstAmmount;
// let howYouSpent = Math.floor(Math.random() * 2)

while (ammount > 0) {
    ammount = ammount - howYouSpent;

    if (ammount > 0) {
        console.log(ammount);
    }
    if (ammount < firstAmmount / 2 || ammount > firstAmmount / 4) {
        console.log("Attenzione: hai già speso metà del tuo budget iniziale. Non spendere altri soldi, zio")
    } else {
        console.log("Zio hai speso tutto il tuo budget. Sei senza soldi!")
    }
}