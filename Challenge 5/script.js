const facture = 275;
let pourboire;
facture > 50 && facture < 300 ? pourboire = 15 * facture / 100 : pourboire = 20 * facture / 100;
console.log(`La note était de `+facture+`, le pourboire de `+pourboire+` et la valeur totale était de `+(facture + pourboire)+`.`);

