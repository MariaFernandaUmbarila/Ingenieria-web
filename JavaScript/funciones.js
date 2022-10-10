let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
    let x = $("#titulo1");
    x.click(presionTitulo1);
    x = $("#titulo2");
    x.click(presionTitulo2);
}

function presionTitulo1(){
    let x = $("#titulo1");
    x.css("color", "#FF0000");
    x.css("background-color", "#FFFF00");
    x.css("font-family", "Arial");
}

function presionTitulo2(){
    let x = $("#titulo2");
    x.css("color", "#FFFF00");
    x.css("background-color", "#FF0000");
    x.css("font-family", "Arial");
}