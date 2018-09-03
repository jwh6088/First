var first=document.getElementById('first');
var che=document.createElement('div');
function Great(){
	var che=document.createElement('div');
	che.style.backgroundImage='url(./img/353.jpg)';
	che.style.height=180+'px';
	first.appendChild(che);
}
window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;	
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
	if(document.documentElement.offsetHeight-clientHeight<=scrollTop){
		Great();	
	}
}
