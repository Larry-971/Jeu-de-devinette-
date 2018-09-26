/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette ! Vous avez doit à 6 essais !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");
 
// TODO : complétez le programme

var essais = 0;

do {
	
	var nombre = Number(prompt("Devinez le nombre cacher qui se trouve entre 1 et 100"));
	essais++;
	if(nombre < solution){
		console.log(nombre + " est trop petit !");
	}else if (nombre > solution) {
		console.log(nombre + " est trop grand !");
	}else if (nombre === solution) {
		console.log("Bravo ! La bonne réponse est " + nombre);
		console.log("Vous avez trouvez en " + essais + " essai(s) !");
	}
	
}
while(nombre !== solution && essais < 6);
//Une fois la boucle fini affiche reste du code !
if (nombre!== solution) {
console.log("Perdu...tu as fais  " + essais +" essais ! La réponse était " + solution);
};