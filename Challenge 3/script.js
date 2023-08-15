// Exercice 1
const bernardHeight = 1.69;
const bernardWeight = 57;
const marcelHeight = 1.95;
const marcelWeight = 100;
let bernardIMC = bernardWeight / (bernardHeight * bernardHeight);
let marcelIMC = marcelWeight / (marcelHeight * marcelHeight);
console.log(bernardIMC);
console.log(marcelIMC);
const bernardHigherIMC  = bernardIMC > marcelIMC
// Exercice 2
if (bernardIMC > marcelIMC) {
    console.log(`Bernard à un IMC (`+Math.round(bernardIMC)+`) plus élevé que Marcel`);
} else {
    console.log(`Marcel à un IMC (`+Math.round(marcelIMC)+`) plus haut que Bernard`);
}
// Exercice 3 c'est moche mais je voulais faire un switch case mais je n'ai pas réussi
if (bernardIMC > 26 && bernardIMC < 31) {
    console.log("Bernard est en surpoids");
}
if (bernardIMC > 41) {
    console.log("Bernard est en obésité importante");
} 
if (bernardIMC > 31 && bernardIMC < 41) {
    console.log("Bernard est en obésité");
}
if (bernardIMC < 21) {
    console.log("Bernard est en insuffisance pondérale");
}
if (bernardIMC > 21 && bernardIMC < 26){
    console.log("Bernard à un poids normal");
}
else {
    console.log();
}
//
if (marcelIMC > 26 && marcelIMC < 31) {
    console.log("Marcel est en surpoids");
}
if (marcelIMC > 41) {
    console.log("Marcel est en obésité importante");
} 
if (marcelIMC > 31 && marcelIMC < 41) {
    console.log("Marcel est en obésité");
}
if (marcelIMC < 21) {
    console.log("Marcel est en insuffisance pondérale");
}
if (marcelIMC > 21 && marcelIMC < 26){
    console.log("Marcel à un poids normal");
}
else {
    console.log();
}
