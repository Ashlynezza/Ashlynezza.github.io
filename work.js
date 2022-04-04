alert(Date());
function over(){
	document.getElementById('two').src='https://p3-tt.byteimg.com/origin/pgc-image/4c84296e66a84b6da958cd9133dcecd9';
}
function changeText(){
document.getElementById('one').innerHTML="Bye Bye";
}

function showKeycode(){
	alert('warnning');
}


function change(){
	var select=document.getElementById('three');
	select.style.backgroundColor='pink';
	select.style.fontFamily='Arial';
	select.style.textAlign='center';
}
function temp(f){
    return (f-32)*(5/9);
    var degree=temp(20);
    document.getElementById('degree').innerHTML=temp;
}

function cal(){
	var a = parseFloat(prompt('the frist number'));
	var b = parseFloat(prompt('the second number'));
	alert('the answer is'+parseFloat(a+b));
}
function sum(){
	var c = prompt('What is your First Name');
	var d= prompt('What is your second Name');
	alert('Hi'+(c+d));
}
