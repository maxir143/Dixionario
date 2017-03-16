$('#ITitle').on('input', function() {
    var Title = document.getElementById("ITitle").value;
    if (Title == ""){
        Title = "Amor"
    };
    document.getElementById("Title").innerHTML = Title;
});


$('#IPre').on('input', function() {
    var Pre = document.getElementById('IPre').value;
    if (Pre == ""){
        Pre = "M"
    };
    document.getElementById("Pre").innerHTML = Pre + ". ";
});


$('#IDesc').on('input', function() {
    var Content = document.getElementById('IDesc').value;
    var Pre = document.getElementById('IPre').value;
    if (Pre == ""){
        Pre = "M"
    };
    if (Content == ""){
        Content = "Ceder el ultimo pedaso de tu pizza a tu pareja aunque te mueras de hambre."
    };
    document.getElementById("Content").innerHTML = '<i class="Pre" id="Pre">'+Pre + ". "+'</i>'+Content;
});

/* ScreenShot */
$(function() {
    $("#btnSave").click(function() {
        html2canvas($("#Canvas"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                canvas.toBlob(function(blob) {
                    var Title = document.getElementById("ITitle").value;
                    saveAs(blob, Title+".png");
                });
            }
        });
    });
});
