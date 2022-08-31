const text = document.getElementById("text2");
const aws = document.getElementById("aws");

function mouseOver(aws){
	text.textContent = "AWS";
}

function mouseOut(aws){
	text.textContent = "Anywhere";
}