var tab = [compte];
var cpt = tab.length;
var result = document.getElementById('resultat');
var compte = document.getElementById('nbrCompte');

function ajouter() {
    var nom = document.getElementById('name');
        nom.innerHTML;
    var prenom = document.getElementById('firstName');
        prenom.innerHTML;
    var login = document.getElementById('login');
        login.innerHTML;
    var mdp = document.getElementById('mdp');
        mdp.innerHTML;
    tab.push([nom,prenom,login,mdp]);
        cpt++;
    nbrCompte.innerHTML = 'il y a' + cpt + 'compte utilisateur';
}
