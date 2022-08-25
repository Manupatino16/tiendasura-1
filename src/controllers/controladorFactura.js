let carrito=JSON.parse(localStorage.getItem("carrito"))

//
let factura=document.getElementById("factura")

//compruebo el estado del carrito de compras
if(carrito==null){

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","justify-content-center")

    let columna=document.createElement("div")
    columna.classList.add("col-12","col-md-4")

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src="../../assets/img/carritovacio.jpg"

    let mensaje=document.createElement("h3")
    mensaje.classList.add("text-center")
    mensaje.textContent="tu carrito esta vacio..."

    columna.appendChild(imagen)
    columna.appendChild(mensaje)
    fila.appendChild(columna)
    factura.appendChild(fila)

}else{

    //recorro el carrito
    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row","justify-content-center","mt-5","shadow","p-3")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-3","border-end","align-text-center")

        let columna3=document.createElement("div")
        columna3.textContent="Subtotal"
        columna3.classList.add("col-12","col-md-3","align-self-center","fs-1","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center","text-muted")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h4")
        precio.classList.add("text-center","mt-5")
        precio.textContent="Costo Unidad:" +producto.precio

        let descripcion=document.createElement("h2")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion

        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: "+producto.cantidad

        let subtotal=document.createElement("h2")
        subtotal.classList.add("fw-bold","text-center","bg-dark","text-white")
        let subtotalcalculado=producto.precio.split("$")[1]*producto.cantidad
        console.log(subtotalcalculado)
        subtotal.textContent="$"+subtotalcalculado

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna3.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        fila.appendChild(columna3)
        factura.appendChild(fila)



    })

}