const text = document.getElementById("text");

let count = 0;

const words = [
	"identify plants",
	"see gestures",
	"count reps", 
	"feel emotions", 
	"sense colors", 
	"check safety"
	];

setInterval(function(){
		count+=1;
		text.textContent = words[count];
		if(count==6){
			count=0;
			text.textContent = words[count];
		}
}, 5080);