var response = "";
var toShow = "";
var t;
var autor = "autor";
var song = "song";

function Show(){
    var n = response.indexOf('\n');
    if (n == -1){
        toShow += response;
    	stopShow();
    }
    toShow += response.substring(0,n+1)+ "<br>";
    response = response.substring(n+1,response.length);
    document.getElementById('lyrics').innerHTML = toShow;
}

function stopShow(){
    clearInterval(t);
}

function startShow(){
    t = setInterval(Show,100); 
}

function getLyrics(autor, song){
    var address = "https://api.lyrics.ovh/v1/" + "village people" + "/" + "in the navy"; 

    const req = new XMLHttpRequest();
    var rep;

	req.onreadystatechange = function() { 
        if (req.readyState == 4 && req.status == 200){
            rep=req.responseText;
            response = JSON.parse(req.response).lyrics;
            startShow();
        }
    }

	req.open('GET', address, true); 
	req.send(null);
}

function replay(){
    stopShow();
    toShow = "";
    getLyrics();
}

function verify(){
    var answer = document.getElementById('reponse').value.toLowerCase();
    if(answer.indexOf(autor) != -1){
        console.log("autor bon!")
    }
    if(answer.indexOf(song) != -1){
        console.log("song bon!")
    }
}