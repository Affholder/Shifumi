const choix = ["Pierre", "Feuille", "Ciseau"];
let scoreJoueur = 0;
let scoreOrdinateur = 0;
let scoreEgalite = 0;
let nombreMatches = 0;

function jouer(choixJoueur) {
    const choixOrdinateur = choix[Math.floor(Math.random()*choix.length)];
    if (choixJoueur==choixOrdinateur){
        scoreEgalite++;
        nombreMatches++;
    }
    else if ((choixJoueur=='Pierre') && (choixOrdinateur=='Ciseau') || (choixJoueur=='Ciseau') && (choixOrdinateur == 'Feuille') || (choixJoueur=='Feuille') && (choixOrdinateur == 'Pierre')) {
        scoreJoueur++;
        nombreMatches++;
    }
    else {
        scoreOrdinateur++;
        nombreMatches++;
    }
    document.getElementById("score-joueur").innerText = scoreJoueur;
    document.getElementById("score-ordinateur").innerText = scoreOrdinateur;
    document.getElementById("score-nul").innerText = scoreEgalite;
    document.getElementById("nombre-matches").innerText = nombreMatches;
}