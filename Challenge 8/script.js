const facture = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = (facture) =>{
    if (facture > 100 && facture < 200) return 10;
    if (facture > 50 && facture < 300) return 15;
    return 20;
}
let tips = [];
for (let i = 0; i < facture.length; i++) {
    tips[i] = facture[i] * calcTip(facture[i]) / 100;
}

let totals = [];
for (let i = 0; i < facture.length; i++) {
    totals.push (facture[i] + tips[i]);
}
console.log(facture);
console.log(tips);
console.log(totals);

function calcAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.lenght; i++) {
        sum += array[i];
    }
    return sum / array.lenght;
}
console.log(calcAverage(tips));
console.log(calcAverage(totals));
console.log(calcAverage(facture));
// J'AI PAS REUSSI AAAAAAAH