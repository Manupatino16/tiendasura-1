let etiquetaBoton=document.getElementById("boton")

//PASOS PARA DETECTAR EVENTOS
etiquetaBoton.addEventListener("click",function(){
    console.log("estoy haciendo clic")
    let titulo=document.getElementById("titulo")
    titulo.textContent="Hola soy manuela"
    let mensaje=document.getElementById("mensaje")
    mensaje.textContent="mentiras van a ganar"
    mensaje.classList.add("text-danger")
    let foto=document.getElementById("foto")
    foto.src="https://firebasestorage.googleapis.com/v0/b/tiendasurampb.appspot.com/o/XCE7BAX3LJEHDHSQZEEAKW2YEM.webp?alt=media&token=4e755bd2-87b6-4cc2-835a-0acea988ee31"
})