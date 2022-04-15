function clicked(){

	alert("İstenilen sayfaya şuanda ulaşılamıyor.");
}
function transfer(){
	
	let current1= document.getElementById("current1");
	let current2=document.getElementById("current2");
	
	let storage=current1.innerHTML;
	
	current1.innerHTML=current2.innerHTML;
	current2.innerHTML=storage;

	
	
	
}