var INTERVAL = 100;

var response = "";
var toShow = "";
var t;
var autor = "autor";
var song = "song";

var points = 100;
var score = 0;
var round = 1;
var multiplier = 0;


function Show(){
    var n = response.indexOf('\n');
    if (n == -1){
        points  = 15;
        toShow += response;
    	stopShow();
    }
    toShow += response.substring(0,n+1)+ "<br>";
    response = response.substring(n+1,response.length);
    document.getElementById('lyrics').innerHTML = toShow;

    if (points > 15){
        points -=1;
    }
    document.getElementById('textCurrentPoints').innerHTML = points;
}

function stopShow(){
    clearInterval(t);
}

function startShow(){
    t = setInterval(Show,INTERVAL); 
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
    document.getElementById("replay").disabled = true;
    document.getElementById("Valider").disabled = false;  
    stopShow();
    document.getElementById('textRound').innerHTML = "round : " + round + "/5";
    toShow = "";
    points = 100;
    getLyrics();
}

function verify(){
    document.getElementById("Valider").disabled = true; 
    document.getElementById("replay").disabled = false; 
    var answer = document.getElementById('reponse').value.toLowerCase();
    var textReponse = "";
    multiplier = 0;
    if(answer.indexOf(autor) != -1){
        textReponse += "Auteur bon ! ["+autor+"] <br>";
        multiplier +=2;
    }
    if(answer.indexOf(song) != -1){
        textReponse += "Chanson bonne ! ["+song+"] ";
        multiplier +=2;
    }  

    if (multiplier > 0){
        multiplier --;
    }

    document.getElementById('textResultat').innerHTML = textReponse;
    endRound();
}

function endRound() {
    stopShow();
    document.getElementById('textPoints').innerHTML = "Points obtenus : " + points + " X " + multiplier;
    score += points * multiplier;
    document.getElementById('textTotalPoints').innerHTML = "Score : " + score;
    if(round == 5){
        endGame();
    }
    round++;
}

function endGame(){
    document.getElementById('textTotalPoints').innerHTML = "Felicitation ! Voici votre score final : " + score;
    round = 0;
    score = 0;
}