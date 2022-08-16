//PASOS PARA CONTROLAR UNA ETIQUETA DESDE JS

//1. CONTROLANDO EL CONTENIDO
let etiquetaTitulo=document.getElementById("titulo")
let etiquetaImagen=document.getElementById("foto")

//1.1 MANIPULANDO EL TEXTO DE LA ETIQUETA(ELEMENTO)
etiquetaTitulo.textContent="jefe usted es como mi padre"

//1.2 MANIPULANDO EL SRC
etiquetaImagen.src="https://www.cultture.com/pics/2021/07/la-policia-fue-llamada-a-la-casa-de-rihanna-en-los-angeles-tras-recibir-informes-de-un-intruso.jpg"

//2. CONTROLANDO EL DISEÑO
let parrafo=document.getElementById("parrafo")
parrafo.textContent="mmmmmmmmmmmmmmmmmmmmmmmmm"

//2.1 AGREGANDO UN ESTILO (CLASS)
//text-danger
parrafo.classList.add("text-danger","fs-1","text-center")
etiquetaImagen.classList.add("d-lock","mx-auto")

//2.2 QUITAR UN ESTILO ()
parrafo.classList.remove("text-danger")