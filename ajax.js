function ajaxGet(url, callback) {
    // Création d'une requête HTTP
    var req = new XMLHttpRequest();
    // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
    req.open("GET",url)
    req.addEventListener("load", function() {
        // Affiche la réponse reçue pour la requête
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText);
        }
    });
    req.addEventListener("error", function() {
        console.error("Erreur reseau");
    });
    // Envoi de la requête
    req.send(null);
}
