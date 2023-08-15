const scoreDauhpin1 = (44 + 23 + 71) / 3;
const scoreDauhpin2 = (85 + 54 + 41) / 3;
const scoreKoala1 = (65 + 54 + 49) / 3;
const scoreKoala2 = (23 + 34 + 27) / 3;
const calcAverage = (score1, score2) => {
    return (score1 + score2) / 2;
}

console.log(averageDauphin = calcAverage(scoreDauhpin1, scoreDauhpin2));
console.log(averageKoala = calcAverage(scoreKoala1, scoreKoala2));
function checkWinner(averageDauphin, averageKoala){
    if (averageDauphin > averageKoala){
        console.log(`L'équipe Dauphin gagne(`+averageDauphin+` vs `+averageKoala+`)`);
    }
    else{
        console.log(`L'équipe Koala gagne(`+averageKoala+` vs `+averageDauphin+`)`);
    }
}
// Bon y'a un petit porblème mais ça marche j'ai le résultat
console.log(checkWinner(averageDauphin, averageKoala));