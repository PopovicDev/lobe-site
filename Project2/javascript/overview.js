
window.onscroll = function(){
	var nav_button = document.getElementById('nav_button');
	if(window.pageYOffset > 50){
		nav_button.classList.add("active_nav_button");
	}
	else{
		nav_button.classList.remove("active_nav_button");
	}
}