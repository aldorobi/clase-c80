var nombre_personas = [];
function submit (){
    var nombre_invitado = document.getElementById("name1").value;
    nombre_personas.push(nombre_invitado);
    var longitud_de_nombre = nombre_personas.length;
    document.getElementById("display_name").innerHTML = nombre_personas.toString();
}
function sorting(){
    nombre_personas.sort();
    var aw4se5r6ftg = nombre_personas.join("<br>");
    document.getElementById("sorted").innerHTML = aw4se5r6ftg.toString();
    
}
function show(){
    var aw4se5r6ftg = nombre_personas.join("<br>");
    document.getElementById("p1").innerHTML = aw4se5r6ftg.toString();
    document.getElementById("sort_button").style.display = "block";
}
function searching(){
    var busqueda = document.getElementById("s1").value;
    var encontrado = 0;
    for (var j = 0; j<nombre_personas.length; j++){
        if (busqueda == nombre_personas[j]){
            encontrado++;
        }
    }
    document.getElementById ("p2").innerHTML = "nombre encontrado" + encontrado + " veces ";
}