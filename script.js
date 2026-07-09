function promedio() {

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let boton = document.getElementById("promedio");

    let promedio = Number(nota1 + nota2 + nota3)/3;
    let mensaje;

    if (promedio >= 70){
        mensaje = "<span style='color:green'>Promedio: <span>" + promedio.toFixed(2) + "<br><span style='color:green'>Aprobado</span>";
    } else {
        mensaje = "<span style='color:red'>Promedio: <span>" + promedio.toFixed(2) + "<br><span style='color:red'>Reprobado</span>";
    }

    document.getElementById("promedio").innerHTML = mensaje;  
}