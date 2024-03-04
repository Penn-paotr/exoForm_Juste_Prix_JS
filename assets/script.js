// Etape 1 - Sélectionner nos éléments
let input           = document.querySelector('#prix');
let error           = document.querySelector('small');
let formulaire      = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);       // " * 1001" nous permet d'avoir une partie entière qui peut être 1000
console.log(nombreAleatoire);
let coups           = 0;
let nombreChoisi;

// Etape 4 - Créer la fonction vérifier
function verifier(nombre) {
    let instruction = document.createElement('div');
    if(nombre < nombreAleatoire) {
        // C'est plus
        // Ajouter un contenu "#1 (4) C'est plus !"
        // Ajouter les classes "instruction" et "plus"
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus !";
        instruction.className   = " instruction plus";
    }
    else if(nombre > nombreAleatoire) {
        // C'est moins
        // Ajouter un contenu "#1 (4) C'est moins !"       
        // Ajouter les classes "instruction" et "moins"
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est moins !";
        instruction.className   = " instruction moins";
    }    
    else {
        // message de félicitations
        // Ajouter un contenu "#1 (4) Félicitations vosu avez trouvé le juste prix!"
        // Ajouter les classes "instruction" et "fini"
        instruction.textContent = "#" + coups + "(" + nombre + ") Félicitations vous avez trouvé le juste prix!";
        instruction.className   = " instruction fini";
    }
    // Ajouter le dernier élément davant les autres
    document.querySelector('#instructions').prepend(instruction);
};


// Etape 5 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {                       // ici fonction anonyme pour aller plus vite et car n'est pas réutilisée
    if(isNaN(input.value)) {
        // Afficher le message d'erreur
        error.style.display = "inline";
    }
    else {
        // Cacher le message d'erreur
        error.style.display = "none";
    }    
});                    

// Etape 6 - Agir à l'envoi du formulaire                      // en récupérant l'événement "submit" et l'empêcher d'envoyer le formulaire
formulaire.addEventListener('submit', (e) => {                 // car par défaut les navigateurs ont un événement pour l'envoi des formulaires
    e.preventDefault();
    if (isNaN(input.value) || input.value == "") {
        // Mettre notre bordure de formulaire en rouge
        input.style.borderColor = "red";
    }
    else {
        // Mettre notre bordure de formuleire en gris
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi            = input.value;
        input.value             = "";
        verifier(nombreChoisi);
    }
});



