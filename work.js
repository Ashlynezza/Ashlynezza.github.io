alert(Date());
function over(){
	document.getElementById('two').src='https://p3-tt.byteimg.com/origin/pgc-image/4c84296e66a84b6da958cd9133dcecd9';
}
function changeText(){
document.getElementById('one').innerHTML="Bye Bye";
}

function Keycode(){
	alert('warnning')
}

function change(){
	var select=document.getElementById('three');
	select.style.backgroundColor='pink';
	select.style.fontFamily='Arial';
	select.style.textAlign='center';
}
function temp(f){
	var f=20;
	alert((f-32)/(9/5));
}
function cal(){
	var a = parseFloat(prompt('the frist number'));
	var b = parseFloat(prompt('the second number'));
	alert('parseFloat(a+b)');
}
function sum(){
	var c = prompt('What is your First Name');
	var d= prompt('What is your second Name');
	alert("Nice to meet you"+c+d);
}
