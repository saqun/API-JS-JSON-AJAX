function ajaxGet(url, callback) {

    // Création d'une requête HTTP
    var req = new XMLHttpRequest();
    // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
    req.open("GET",url, true)
    req.addEventListener("load", function() {
        // Affiche la réponse reçue pour la requête
        if (req.status >= 200 && req.status < 400) {
            callback(req.status, req.responseText);
        } else {
            callback(req.status, "error - " + req.status + " " + req.statusText);
        }
    });
    req.addEventListener("error", function() {
        callback(req.status, "error - network");
    });
    // Envoi de la requête
    req.send(null);
}
function span_text(xclass, input) {
	var text = "<span class=\"" + xclass + "\">" + input + "</span>";
	return text;
}
function treat_earthquakes_data(status, data) {
	if (status != 200) {
		document.getElementById("result").innerHTML = status + " " + data;
		return;
	}
	var jsd = JSON.parse(data);
		

	var text = "<h3> Rate Exchange " + span_text("black_bg", jsd.base) + "</h3>";
	text = text + span_text("noblack_bg", "Date: " + jsd.date) + "<br>";
	text = text + "<table>";
	// alert(jsd.rates["AUD"]);
	for (property in jsd.rates) {
		text = text + "<tr> <td> " + property + "</td><td>" + jsd.rates[property] + "</td></tr>"; 
	}
	text = text + "</table>";

	document.getElementById("result").innerHTML = text;

}

//var url = "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
var url = "https://ratesapi.io/api/latest"

ajaxGet(url, treat_earthquakes_data);
