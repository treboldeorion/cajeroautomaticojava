
/*CLIENTES*/
var cuenta = [
{nombre:"Miguel",saldo:200, password:"9876"},
{nombre:"Day",saldo:200, password:"1234"},
{nombre:"Jero",saldo:200, password:"5678"}
];

/*VALIDAR CONTRASEÑA*/
document.querySelector(".contenido").style.display = "none"  /*BORRA DISPLAY*/




function enviar(){
    let indice = parseInt(document.querySelector("#cuenta").value)
    let pass1 = document.querySelector("#pass").value; /*CONTRASEÑA INGRESADA*/
    let pass2 = cuenta [indice-1].password;   /*CONTRASEÑA GRABADA USUARIO*/
    if(pass1 === pass2){
    document.querySelector("#bienvenido").innerHTML="Bienvenido al Banco Caiman"
    document.querySelector(".contenido").style.display= "block"
    document.querySelector(".inicio").style.display = "none"
    alert("Bienvenido")
   }else
   {document.querySelector("#bienvenido").innerHTML="Contraseña Invalida"
   alert("Incorrecto")

}
   
   
}


function cierre() {
    window.location.reload()
  }



/*Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/
/*REGLA*/
    
function regla (){
    let indice = parseInt(document.querySelector("#cuenta").value)
    let saldo = cuenta [indice-1].saldo;

    if( saldo >990) {
        document.getElementById("bienvenido").alert="Excedio su saldo, consuelte a un asesor bancario"
    }
    if( saldo <10 ) {
        document.getElementById("bienvenido").innerHTML="Saldo insuficiente"
    } else (document.getElementById("bienvenido").innerHTML="Transaccion Exitosa")
}

/*let msn = document.getElementById("passwordHelpBlock").value;*/



document.querySelector("#cuenta").addEventListener("change",leerPersona)
document.querySelector("#consig").addEventListener("click",leerconsignar,regla)
document.querySelector("#reti").addEventListener("click",leerretirar,regla)


/*LEER PERSONSA*/

function leerPersona(){
    let indice = parseInt(document.querySelector("#cuenta").value);
    let cliente = cuenta[indice-1].nombre;
    let saldo = cuenta [indice-1].saldo;
    document.getElementById("titulo").innerHTML = "Hola, " + cliente + " Tu saldo es";
    document.getElementById("descripcion").innerHTML = " $ " + saldo;
    
}


/*rEtIRAR PERSONA*/

function leerretirar(){
let retiro = parseInt(document.querySelector("#retirar").value);
let indice = parseInt(document.querySelector("#cuenta").value);
let saldo = cuenta [indice-1].saldo;

document.getElementById("descripcion").innerHTML =saldo-retiro;
cuenta [indice-1].saldo = saldo-retiro;

if( saldo < 11 ) {
    document.querySelector("#descripcion").innerHTML="Saldo insuficiente"
} else (document.querySelector("#bienvenido").innerHTML="Transaccion Exitosa")

console.log(saldo);
}

/*CONSIGNAR PERSONA*/

function leerconsignar(){
    let consignar = parseInt(document.querySelector("#consignar").value);
    let indice = parseInt(document.querySelector("#cuenta").value);
    let saldo = cuenta [indice-1].saldo;
    
    document.getElementById("descripcion").innerHTML = saldo+consignar;
    cuenta [indice-1].saldo = saldo+consignar;

    if( saldo >990) {
        document.getElementById("descripcion").alert="Excedio su saldo, consuelte a un asesor bancario" }
        else { (document.getElementById("bienvenido").innerHTML="Transaccion Exitosa")
    }
    console.log(saldo);
}

