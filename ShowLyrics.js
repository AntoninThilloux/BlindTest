var test = "Where can you find pleasure\r\nSearch the world for treasure\r\nLearn science technology\r\n\nWhere can you begin to make your dreams all come true\r\nOn the land or on the sea\r\nWhere can you learn to fly\nPlay in sports and skin dive\nStudy oceanography\nSign up for the big band\nOr sit in the grandstand";
var toShow = "";
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
    
}