var form=document.getElementById('form');
	var input=document.getElementById('user');
	var input2=document.getElementById('pass');
	var but=document.getElementById('but');
	var for1=document.getElementById('for1');
	var ii=document.getElementById('ii');
	var ii2=document.getElementById('ii2');
function check(){
	var pattern=/\d{6,}/;
	if(pattern.test(input.value)){
		return true;
	}else{
		for1.style.background='#ffebeb';
		for1.innerHTML='请输入正确的账号和密码';
		for1.style.border='1px solid #f00';
		input.style.border='1px solid #f00';
		ii.style.borderTop='1px solid #f00';
		ii.style.borderLeft='1px solid #f00';
		ii.style.borderBottom='1px solid #f00';
		ii.style.background='#ffebeb';
		input2.style.border='1px solid #f00';
		ii2.style.borderTop='1px solid #f00';
		ii2.style.borderLeft='1px solid #f00';
		ii2.style.borderBottom='1px solid #f00';
		ii2.style.background='#ffebeb';
		return false;
	}
}
// 拖拽
var div=document.getElementById('men');
div.onmousedown=function(ev){
	var e=ev||event;
	var dx=e.clientX-div.offsetLeft;
	var dy=e.clientY-div.offsetTop;
	document.onmousemove=function(ev){
		var e=ev||event;
		var l=e.clientX-dx;
		var t=e.clientY-dy;
		div.style.left=l+'px';
		div.style.top=t+'px';
	}
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}