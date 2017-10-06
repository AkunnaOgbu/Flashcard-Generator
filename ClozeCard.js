module.exports = ClozeCard;

function ClozeCard(text, cloze) {
	this.text = text;
	console.log("this.text: " + this.text);

	this.cloze = cloze;
	console.log("this.cloze" + this.cloze);

	this.partial = text.split(cloze);
	console.log("this.partial" + this.partial);
};

var diarrhea = new BasicCard(
	"What is the treatment for Cdiff diarrhea?", "Flagyl");

//"What is the treatment for Cdiff diarrhea?"
console.log(diarrhea.front);

//"Flagyl"
console.log(diarrhea.back);

var diarrheaCloze = new ClozeCard(
	"What is the treatment for Cdiff diarrhea?", "Flagyl");

//"Flagyl"
console.log(diarrheaCloze.cloze);

//"...treatment for Cdiff diarrhea.""
console.log(diarrhea.partial);

//"Flagyl is the treatment for Cdiff diarrhea"
console.log(diarrheaCloze.text);

var brokenCloze = new ClozeCard("505 Error");