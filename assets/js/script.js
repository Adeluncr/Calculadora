// Necesito 4 funciones (sumar, restar, multiplicar y dividir)


function sumar(){
   
    //La suma se llama c, para hacerla tengo que tomar el valor de mi input que esta en el html, por eso utilizo el .value
    //Ademas, tengo que convertirlo a un entero, si no en lugar de hacer una suma me va a concatenar los valores, para eso uso el parseInt
    c = parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML = c;
    console.log(c);
}


function restar(){
    c = parseInt(document.getElementById("a").value) - parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML = c;
    console.log(c);
}


function multiplicar(){
    c = parseInt(document.getElementById("a").value) * parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML = c;
    console.log(c);
}


function dividir(){
    c = parseInt(document.getElementById("a").value) / parseInt(document.getElementById("b").value);
    document.getElementById("c").innerHTML = c;
    console.log(c);
}


