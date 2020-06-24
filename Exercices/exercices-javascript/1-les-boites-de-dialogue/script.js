// Exercice 1: affiche Hello World dans une boite de dialogue alert();

// Exercice 2: Place ton code précédent en commentaire. Dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur

// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
window.alert('Hello World');
let whatsYourName = prompt("Comment t'appelles tu?");
console.log(whatsYourName);
window.alert('salut Sam');
let whatsYourAge = prompt('Quel age as tu?');
parseInt(whatsYourAge, 10);
if (whatsYourAge >= '18') {
  window.confirm('Bienvenue Sam');
  console.log(confirm);
} else window.alert('erreur');
