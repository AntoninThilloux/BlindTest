var test = "";
var toShow = "";
getLyrics("test","test2");
var t = setInterval(Show,100); 

function Show(){
    var n = test.indexOf('\n');
    if (n == -1){
    	stopShow();
    }
    toShow += test.substring(0,n+1)+ "<br>";
    test = test.substring(n+1,test.length);
    document.getElementById('lyrics').innerHTML = toShow;
}

function stopShow(){
    clearInterval(t);
}


function getLyrics(autor, song){
    var address = "https://api.lyrics.ovh/v1/" + "village people" + "/" + "in the navy"; 
    console.log(address);

    const req = new XMLHttpRequest();

	req.onreadystatechange = function() { 
        if (req.readyState == 4 && req.status == 200)
            callback(req.responseText);
    }

	req.open('GET', address, true); 
	req.send(null);


	if (req.status === 200) {
 	   console.log("Réponse reçue: %s", req.responseText);
 	   test = req.lyrics;
	} else {
	    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
	}

}