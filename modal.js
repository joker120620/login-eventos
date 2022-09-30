const pedir=document.querySelector(".pedir");
const salir=document.querySelector(".salir");
const modal=document.querySelector(".modal");
const modal2=document.querySelector(".modal2");
const lista =document.querySelector("#select");
const cancelar=document.querySelector(".cancelar");
const aceptar=document.querySelector(".aceptar");
const volver=document.querySelector(".salir_modal2");
const modalProducto=document.querySelector("#modal_producto");
pedir.addEventListener("click",()=>{
    if(lista.selectedIndex===0){
        alert("no escogio nada");
    }else{
        modal.style.top=0;
        modalProducto.textContent =lista.options[lista.selectedIndex].text;
    }
    
});
aceptar.addEventListener("click",()=>{
    modal.style.top="-100vh"
    modal2.style.top=0;

})
cancelar.addEventListener("click",()=>{
    modal.style.top="-100vh"

});
volver.addEventListener("click",()=>{
    modal2.style.top="-200vh"
});
salir.addEventListener("click",()=>{
    setTimeout( window.location.href="./index.html", 2000);
});