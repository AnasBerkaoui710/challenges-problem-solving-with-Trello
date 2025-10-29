function frequenceCaracteres(chaine) {
  const frequence = [];
  for (let i = 0; i < chaine.length; i++) {
    const caractere = chaine[i];
    if (frequence[caractere]) {
      frequence[caractere]++;
    } else {
      frequence[caractere] = 1;
    }
  }

  return frequence;
}

// Exemple

console.log(frequenceCaracteres("hello"));
