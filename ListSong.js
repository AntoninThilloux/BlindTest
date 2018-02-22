var items = [["u2","sunday bloody sunday"],
["the eagles","hotel california"],
["the police","roxanne"],
["ram jam","black betty"],
["metalicca","nothing else matters"],
["acdc","highway to hell"],
["queen","bohemian rhapsody"],
["queen","under pressure"],
["the beatles","come together"],
["paul mc cartney","live and let die"],
["france gall","resiste"],
["france gall","il jouait du piano debout"],
["daniel balavoine","mon fils ma bataille"],
["francis cabrel","je l'aime à mourir"],
["renaud","mistral gagnant"],
["renaud","manhattan-kaboul"],
["telephone","cendrillon"],
["alain souchon","foule sentimentale"],
["michel delpech","pour un flirt"],
["orelsan","basique"],
["orelsan","tout va bien"],
["mc solaar","sonotone"],
["mc solaar","solaar pleure"],
["mc solaar","da vinci claude"],
["mc solaar","rmi"],
["kyo","ton mec"],
["julien dore","coco caline"],
["julien dore","porto vecchio"],
["gorillaz","clint eastwood"],
["matmatah","lambé an dro"],
["daft punk","around the world"],
["tryo","l'hymne de nos campagne"]];

function getRandomSong() {
	var length = items.length;
	var index = Math.floor(Math.random() * length);
	return items[index];
}