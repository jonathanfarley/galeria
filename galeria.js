window.onload=click;
var img1;
img1="<img src='";
var tamaño="' height='100%' width:'100%'/>";
var imagen;
imagen="<img src='";
var principal="<img src='C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen1.jpg'height='100%' width:'100%'/>";
	function click() {
		var img1=document.getElementById('CHEVROLET')
		img1.addEventListener("click",function() {
									clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen1.jpg");
									});
		img1.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen1.jpg");
										});
		img1.addEventListener("mouseout",queda);

		var img2=document.getElementById('BMW')
		img2.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen2.jpg");
									});
		img2.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen2.jpg")
										});
		img2.addEventListener("mouseout",queda);

		var img3=document.getElementById('FORD')
		img3.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen3.jpg");
									});
		img3.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen3.jpg")
										});
		img3.addEventListener("mouseout",queda);

		var img4=document.getElementById('RENAULT')
		img4.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen4.jpg");
									});
		img4.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen4.jpg")
										});
		img4.addEventListener("mouseout",queda);

		var img5=document.getElementById('TOYOTA')
		img5.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen5.jpg");
									});
		img5.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen5.jpg")
										});
		img5.addEventListener("mouseout",queda);

		var img6=document.getElementById('MAZDA')
		img6.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen6.jpg");
									});
		img6.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen6.jpg")
										});
		img6.addEventListener("mouseout",queda);	
		var img7=document.getElementById('HYUNDAI')
		img7.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen7.jpg");
									});
		img7.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen7.jpg")
										});
		img7.addEventListener("mouseout",queda);

		var img8=document.getElementById('KIA')
		img8.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen8.jpg");
									});
		img8.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen8.jpg")
										});
		img8.addEventListener("mouseout",queda);
		
		var img9=document.getElementById('HONDA')
		img9.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen9.jpg");
									});
		img9.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen9.jpg")
										});
		img9.addEventListener("mouseout",queda);
		var img10=document.getElementById('NISSAN')
		img10.addEventListener("click",function() {
								clicEn("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen10.jpg");
									});
		img10.addEventListener("mouseover",function() {
										mostrar("C:/Users/sena/Desktop/pacheco/aplicacion/IMAGENES/imagen10.jpg")
										});
		img10.addEventListener("mouseout",queda);
}

	function clicEn(img){

		imagen +=img;

		imagen +=tamaño;

		var y=document.getElementById('marcas').innerHTML = imagen;
		principal=imagen;
		imagen="<img src='";
	}

	function mostrar(img2){
		img1 +=img2;
		img1 +=tamaño;
		var j=document.getElementById('marcas').innerHTML = img1;
		img1="<img src='";
	}
	function queda() {
		var fondo=document.getElementById('marcas').innerHTML = principal;
	}