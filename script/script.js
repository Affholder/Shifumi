const choix = ["Pierre", "Feuille", "Ciseau"];
let scoreJoueur = 0;
let scoreOrdinateur = 0;
let scoreEgalite = 0;

function jouer(choixJoueur) {
    const choixOrdinateur = choix[Math.floor(Math.random()*choix.length)];
    if (choixJoueur==choixOrdinateur){
        scoreEgalite++;
    }
    else if ((choixJoueur=='Pierre') && (choixOrdinateur=='Ciseau') || (choixJoueur=='Ciseau') && (choixOrdinateur == 'Feuille') || (choixJoueur=='Feuille') || (choixOrdinateur == 'Pierre')) {
        scoreJoueur++;
    }
    else {
        scoreOrdinateur++;
    }
}