// Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
// Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.

// Pour chacun, créer un objet avec des propriétés pour leurs prénom, poids et taille.
// Créer une méthode ‘calcBMI’ dans chacun des objets permettant de calculer l’IMC. Stockez la valeur calculée dans une propriété de l’objet et aussi la retourner dans la méthode.
// Afficher dans la console qui a l’IMC le plus élevé de cette manière : “L’IMC de Bernard (20,2) est plus élevé que celui de Marcel (19,3)”
const bernard1 = {
  name: 'Bernard',
  height: 1.69,
  weight: 78,
  bmi: 0,
  calcBMI: function(height, weight) {
    const bmi = weight / (height * height);
    return bmi;
  }
};
const marcel1 = {
  name: 'Marcel',
  height: 1.95,
  weight: 92,
  bmi: 0,
  calcBMI: function(height, weight) {
    const bmi = weight / (height * height);
    return bmi;
  }
};
const bernard2 = {
  name: 'Bernard',
  height: 1.88,
  weight: 95,
  bmi: 0,
  calcBMI: function(height, weight) {
    const bmi = weight / (height * height);
    return bmi;
  }
};
const marcel2 = {
  name: 'Marcel',
  height: 1.76,
  weight: 85,
  bmi: 0,
  calcBMI: function(height, weight) {
    const bmi = weight / (height * height);
    return bmi;
  }
};
//
marcel1.bmi = marcel1.calcBMI(marcel1.height, marcel1.weight);
bernard1.bmi = bernard1.calcBMI(bernard1.height, bernard1.weight);
if (bernard1.bmi > marcel1.bmi){
  console.log(`L'IMC de Bernard est plus élevé (`+Math.round(bernard1.bmi)+`) que celui de Marcel (`+Math.round(marcel1.bmi)+`)`)
}
else if (bernard1.bmi == marcel1.bmi){
  console.log(`Les reufs ont le même IMC`)
}
else{
  console.log(`L'IMC de Marcel est plus élevé (`+Math.round(marcel1.bmi)+`) que celui de Bernard (`+Math.round(bernard1.bmi)+`)`)
}
