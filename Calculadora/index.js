function calcular(numVitoria, numDerrota) {
  let balanceMatch = numVitoria - numDerrota;
  return balanceMatch
}

let resultMatch = calcular(392, 101)

let lvlHero;

if (resultMatch <= 10) {
  lvlHero = "Ferro"
} else if (resultMatch > 10 && resultMatch <= 20 ) {
  lvlHero = "Bronze"
} else if (resultMatch > 20 && resultMatch <= 50 ) {
  lvlHero = "Prata"
} else if (resultMatch > 50 && resultMatch <= 80 ) {
  lvlHero = "Ouro"
} else if (resultMatch > 80 && resultMatch <= 90 ) {
  lvlHero = "Diamante"
} else if (resultMatch > 90 && resultMatch <= 100 ) {
  lvlHero = "Lendario"
} else if (resultMatch >= 101 ) {
  lvlHero = "Imortal"
}

console.log(" O herói tem saldo de " + resultMatch + " e está no nível de " + lvlHero)