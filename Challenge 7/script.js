const calcTip = (facture) =>{
    if (facture > 100 && facture < 200) return 10;
    if (facture > 50 && facture < 300) return 15;
    return 20;
}
const facture = [125, 555, 44];
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