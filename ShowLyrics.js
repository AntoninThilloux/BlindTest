var test = "";
var toShow = "";
getLyrics("test","test2");
var t;

function Show(){
    var n = test.indexOf('\n');
    if (n == -1){
        toShow += test;
    	stopShow();
    }
    toShow += test.substring(0,n+1)+ "<br>";
    test = test.substring(n+1,test.length);
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
            test = JSON.parse(req.response).lyrics;
            console.log(req)
                startShow();
        }
    }

	req.open('GET', address, true); 
	req.send(null);

}