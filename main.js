// funcion es para el checked del monoA
function monoA()
{
    var img = document.getElementById("img_mono_a");
    var checkA = document.getElementById("mono_a");

    if(checkA.checked) //esta el monoA con el checked?
    {
        //si la respuesta es si aparece la imagen del mono feliz
        img.innerHTML = '<img class="imagen img-responsive" src="image/feliz.gif">'; 
    }else{
         //si no entonces aparece la imagen del mono triste
        img.innerHTML = '<img class="imagen img-responsive" src="image/triste.gif">';
    }
}

// funcion para el checked del monoB
function monoB()
{
    var img = document.getElementById("img_mono_b");
    var checkB = document.getElementById("mono_b");

    if(checkB.checked)// esta el monoB con el checked?
    {
         //si la respuesta es si aparece la imagen del mono feliz
        img.innerHTML = '<img class="imagen img-responsive" src="image/feliz.gif">';
    }
    else{
        //si no entonces aparece la imagen del mono triste
        img.innerHTML = '<img class="imagen img-responsive" src="image/triste.gif">';
    }
}
// funcion evaluar que se lanza cuando se presiona el button evaluar
function evaluar()
{
    var aSmile = document.getElementById("mono_a").checked;
    var bSmile = document.getElementById("mono_b").checked;
    var salida = document.getElementById("salida");

    if(aSmile == bSmile) // evalua si los dos sonrien y tambien si los dos estan tristes
    {
        // problemas, uso de animate para darle movimiento a la respuesta
        salida.innerHTML = "<h3 class='animated wobble'> Estamos en problemas!!! ayuda! </h3>";
    }else{
        //no hay problema, uso de animate para darle movimiento a la respuesta
        salida.innerHTML = "<h3 class='animated wobble'> No hay problemas, no temas! </h3>";
    }
}