const marca = document.querySelector("#marca");
const categoria = document.querySelector("#categoria");
//const nombre = document.querySelector("#nombre");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const tecnica = document.querySelector("#tecnica");
const material = document.querySelector("#material");
const color = document.querySelector("#color");
const select = document.querySelector("#select");


//colocar resultados
const resultado = document.querySelector("#resultado");

document.addEventListener('DOMContentLoaded',()=>{
    

    mostrarCompus(compus); //muestra las computadoras al cargar

    limpiarHTML();


    console.log();
  
  select.addEventListener('onchange', function(){
    console.log('cambiando');

  });
   
});


function mostrarCompus(compus){
    limpiarHTML();//limpiar
    compus.forEach(compu =>{
      
        const compuHTML = document.createElement('p');
        const compuImg = document.createElement('img');
        compuImg.classList.add("imagen-compu")
        const{marca, categoria, nombre, tecnica, precio, material, color, imagen}=compu;
        compuHTML.textContent=`
          marca: ${marca} - categoria: ${categoria} - Nombre: ${nombre} - Tecnica: ${tecnica} - Precio: $${precio} - material: ${material} - color: ${color}
        `;
        compuImg.src = imagen;
        //insertar en el html
        resultado.appendChild(compuImg);
        resultado.appendChild(compuHTML);
        
    })
}
//Limpiar HMTL

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
        
    }
    
}



//generamos el objeto para las busquedas
const buscador={
    marca: '',
    categoria:'',
    nombre:'',
    minimo:'',
    maximo:'',
    tecnica:'',
    material:'',
    color:''
}
//select de busqueda al seleccionarlos se activa el change



marca.addEventListener('change', e =>{
   buscador.marca = e.target.value;
   console.log(buscador);

   filtrarDato();
})

categoria.addEventListener('change', e =>{
    buscador.categoria = e.target.value;
    console.log(buscador);

    filtrarDato();
 })

 /*nombre.addEventListener('change', e =>{
    buscador.nombre = parseInt(e.target.value);
    console.log(buscador);

    filtrarDato();
 })*/

 

 minimo.addEventListener('change', e =>{
    buscador.minimo = e.target.value;
    console.log(buscador);

    filtrarDato();
 })
 maximo.addEventListener('change', e =>{
    buscador.maximo = e.target.value;
    console.log(buscador);

    filtrarDato();
 })
 tecnica.addEventListener('change', e =>{
    buscador.tecnica = e.target.value;
    console.log(buscador);

    filtrarDato();
 })

 material.addEventListener('change', e =>{
    buscador.material = e.target.value;
    console.log(buscador);

    filtrarDato();
 })
 color.addEventListener('change', e =>{
    buscador.color = e.target.value;
    console.log(buscador);

    filtrarDato();
 })
  




//funcion que filtra en base a busqueda
function filtrarDato() {
const resultado = compus.filter(filtrarMarca).filter(filtrarCategoria).filter(filtrarNombre).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarTecnica).filter(filtrarMaterial).filter(filtrarColor);
    


if(resultado.length){

    mostrarCompus(resultado);
}else{
    noResultado();
}
}
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='no hay resultados';
    resultado.appendChild(noResultado);
}


function filtrarMarca(compu) {
    const{marca}= buscador;
  if(marca){
    return compu.marca === marca;
  }
  return compu;

}
function filtrarCategoria(compu){
    const{categoria}= buscador;
    if(categoria){
      return compu.categoria === categoria;
    }
    return compu;
  

}
function filtrarNombre(compu){
    const{nombre}= buscador;
    if(nombre){
      return compu.nombre === nombre;
    }
    return compu;
  

}

function filtrarMinimo(compu){
    const{minimo}= buscador;
    if(minimo){
      return compu.precio >= minimo;
    }
    return compu;
}
function filtrarMaximo(compu){
    const{maximo}= buscador;
    if(maximo){
      return compu.precio <= maximo;
    }
    return compu;
}
function filtrarTecnica(compu) {
    const{tecnica}= buscador;
    if(tecnica){
      return compu.tecnica === tecnica;
    }
    return compu;
}
function filtrarMaterial(compu){
    const{material}= buscador;
    if(material){
      return compu.material === material;
    }
    return compu;
}
function filtrarColor(compu){
    const{color}= buscador;
    if(color){
      return compu.color === color;
    }
    return compu;
}



