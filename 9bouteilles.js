function totalBouteilles(initialPleines) {
  let b = 0;
  let pleines = initialPleines;
  let vides = 0;

  while (pleines > 0) {
    b += pleines;
    vides += pleines;
    pleines = Math.floor(vides / 3);
    vides = vides % 3;
  }

  return b;
}

console.log(totalBouteilles(9));
