function nombreManquant(tableau) {
  const n = tableau.length + 1; // Puisqu'il manque un nombre
  const sommeTotale = (n * (n + 1)) / 2;
  let sommeActuelle = 0;

  for (let i = 0; i < tableau.length; i++) {
    sommeActuelle += tableau[i];
  }
  nbr=sommeTotale - sommeActuelle;
  return nbr;
}

// Exemple
console.log("le nombre qui mange dans le tableau est ",nombreManquant([1, 2, 3, 4,6]));

