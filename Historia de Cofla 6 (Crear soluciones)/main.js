const contenedorLLaves = document.querySelector(".container_llaves");
const elementoSeleccionado = document.getElementById("idProducto");
elementoSeleccionado.setAttribute("form","form");
crearLLave = (id,model,price) => {
    
    let imagen = `<img class="llave-img" src="./llave.png">`
    let identificador = `<h2>ID: ${id}</h2>`
    let modelo = `<h3>Modelo: ${model}</h3>`
    let precio = `<p>El precio es de: $${price}</p>`

    let llave = [imagen,identificador,modelo,precio]

    return llave;
}


let fragmento = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    let modelo = Math.round(Math.random()*10000);
    let precio = Math.round(Math.random()*10 +30);
    
    let llave = crearLLave(i+1,modelo,precio);
    let divLlave = document.createElement("div");
    divLlave.classList.add(`item-${i+1}`,`flex-item`);
    divLlave.tabIndex = i;
    divLlave.addEventListener("click", ()=>{
        elementoSeleccionado.value = modelo;
    });
    divLlave.innerHTML = llave[0] + llave[1] + llave[2] +llave[3];
    fragmento.appendChild(divLlave);
}

contenedorLLaves.appendChild(fragmento);