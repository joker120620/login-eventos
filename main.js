function session_iniciada() {
    setTimeout( window.location.href="./body.html", 2000);
  }
//prevenir que se nos envie el formulario vacio
document.getElementById("ingresar").addEventListener("click", evento=>{
    evento.preventDefault();
    if(document.getElementById("usuario").value==="" || document.getElementById("contraseña").value==""){
        document.getElementById("mensaje").style.display="block";
        document.getElementById("mensaje").style.backgroundColor="rgb(219, 112, 112)";
        document.getElementById("mensaje").style.color="white";
        setTimeout(()=>{
            document.getElementById("mensaje").style.display="none";
            
        },5000)
    }
    if(document.getElementById("usuario").value=="carlitos" && document.getElementById("contraseña").value=="carlitos123"){
        alert("Bienvenido")
        session_iniciada();

    }else{
        document.getElementById("mensaje").style.display="block";
        document.getElementById("mensaje").style.backgroundColor="rgb(219, 112, 112)";
        document.getElementById("mensaje").style.color="white";
    }
})
document.getElementById("contraseña").addEventListener("mouseenter", contra=>{
    contra.target.type="text";

})
document.getElementById("contraseña").addEventListener("mouseout", contra=>{
    contra.target.type="password";

})
document.getElementById("recuerdame").addEventListener("change",()=>{
    if(recuerdame.checked){
        alert("recordado")
    }
})