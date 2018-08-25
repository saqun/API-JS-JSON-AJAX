
var articlesElt = document.getElementById("articles");
var username="saqun";
// var url = "https://developer.github.com/v3/users/" + username;
var url = "https://api.github.com/users/"  + username;

ajaxGet(url, function (reponse) {

    // Transforme la réponse en un tableau d'articles
    var data = JSON.parse(reponse);
        // Ajout du titre et du contenu de chaque article

		var login = data.login;
		var id    = data.id;
		var home  = data.url;
		var repos_url = data.repos_url;
		var repos_nb  = data.public_repos;
		
		var created = data.created_at;
		var updated = data.updated_at;
		
		var html;
		html = "<strong>Login: </strong>" + login + "   Id: " + id + "<br>";
        html = html + "<strong> Home: </strong> " + home + "<br>";
        html = html + "<strong> Repos_url:</strong> " + repos_url + "<br>";
        html = html + "<strong> Repos_nb: </strong>" + repos_nb + "<br>";
        html = html + "<strong> Created: </strong>" + created + "<br>";
        html = html + "<strong> Updated:</strong> " + updated + "<br>";
		articlesElt.innerHTML = html;
});

