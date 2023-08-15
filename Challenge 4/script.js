// Première épreuve
let dauphinsScore1 = (96 + 108 + 89) / 3;
let koalasScore1 = (88 + 91 + 110) / 3;
if (dauphinsScore1 < 100 && koalasScore1 < 100){
    console.log(`Il n'y a aucun gagnant, les deux équipes ont eu un score moins de 100`);
}
else if (dauphinsScore1 > koalasScore1) {
    console.log(`Les Dauphins ont gagné la première épreuve avec un score de(`+dauphinsScore1+`) alors que les Koalas eux ont eu un score de (`+koalasScore1+`)`);
} 
else if (dauphinsScore1 == koalasScore1) {
    console.log(`Les Dauphins et les Koalas sont à égalité pour la première épreuve`);
} else {
    console.log(`Les Koalas ont gagné la première épreuve avec un score de(`+koalasScore1+`) alors que les Dauphins eux ont eu un score de (`+dauphinsScore1+`)`);
}
//Deuxième épreuve
let dauphinsScore2 = (97 + 112 + 101) / 3;
let koalasScore2 = (109 + 95 + 123) / 3;
if (dauphinsScore2 < 100 && koalasScore2 < 100){
    console.log(`Il n'y a aucun gagnant, les deux équipes ont eu un score moins de 100`);
}
else if (dauphinsScore2 > koalasScore2) {
    console.log(`Les Dauphins ont gagné la deuxième épreuve avec un score de(`+dauphinsScore2+`) alors que les Koalas eux ont eu un score de (`+koalasScore2+`)`);
} 
else if (dauphinsScore2 == koalasScore2) {
    console.log(`Les Dauphins et les Koalas sont à égalité pour la deuxième épreuve`);
} else {
    console.log(`Les Koalas ont gagné la deuxième épreuve avec un score de(`+koalasScore2+`) alors que les Dauphins eux ont eu un score de (`+dauphinsScore2+`)`);
}
// Troisème épreuve
let dauphinsScore3 = (97 + 112 + 101) / 3;
let koalasScore3 = (109 + 95 + 106) / 3;
if (dauphinsScore3 < 100 && koalasScore3 < 100){
    console.log(`Il n'y a aucun gagnant, les deux équipes ont eu un score moins de 100`);
}
else if (dauphinsScore3 > koalasScore3) {
    console.log(`Les Dauphins ont gagné la troisième épreuve avec un score de(`+dauphinsScore3+`) alors que les Koalas eux ont eu un score de (`+koalasScore3+`)`);
} 
else if (dauphinsScore3 == koalasScore3) {
    console.log(`Les Dauphins et les Koalas sont à égalité pour la troisème épreuve`);
} else {
    console.log(`Les Koalas ont gagné la troisème épreuve avec un score de(`+koalasScore3+`) alors que les Dauphins eux ont eu un score de (`+dauphinsScore3+`)`);
}
// Verdict (Oui c'est pas bien de faire comme ça mais je sais pas trop comment faire autrement)
console.log(`Les Koalas ont gagné contre les Dauphins !`)