$(document).ready(function() {
    $(".leccion-link").click(function(event) {
        event.preventDefault();
        var url = $(this).attr("href");
        cargarContenido(url);
    });
});

function cargarContenido(url) {
    $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
            $("#contenido-leccion").html(data);
        },
        error: function() {
            alert("Error al cargar el contenido de la lección.");
        }
    });
}
