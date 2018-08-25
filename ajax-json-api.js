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

function treat_earthquakes_data(data) {
    // JSON.parse == JSON format ==> JavaScript 
    // JSON.stringify(data => JavaScript structure => JSON	
	//     var avion = { marque: "Airbus", couleur: "A320" };
	//     var texteAvion = JSON.stringify(avion);
	//     ** Transforme la chaîne de caractères JSON en objet JavaScript
	//     console.log(JSON.parse(texteAvion));

    var earthquakes = JSON.parse(data);

    var elt = document.getElementById("result");
    //elt.innerHTML = earthquakes;
    // OK alert(earthquakes.type);
    var html = "<h1> " + earthquakes.metadata.title + "</h1>";
    html = html + "<strong> print the events that only have a magnitude greater than 4. </strong>";
 
	html = "<table id=\"mag_tab\"> <tr> <th> Magnitue </th> <th> Place </th> <th> Date </th></tr>" ;
	
    for (i = 0; i < earthquakes.features.length; i++) {
        if (earthquakes.features[i].properties.mag > 4.0) {
            var time = parseInt(earthquakes.features[i].properties.time);
            var d = new Date(time);
			var mag = earthquakes.features[i].properties.mag;
			var place = earthquakes.features[i].properties.place; 
			var dd = d.getDate() + "/" + d.getMonth() + "/" + d.getYear();
			var tr = "<tr> <td>" + mag + "</td> <td> " + place + "</td><td>" + dd + "</td> </tr>";
			
            html = html + tr;
        }
    }   
    html = html + "</table>";
    elt.innerHTML = html;
}
var url = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"

// ajaxGet("http://localhost:8080/javascript-web-srv/data/langages.txt", console);
ajaxGet(url, treat_earthquakes_data);
