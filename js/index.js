window.onload = function initCanvas() {
    var myCanvas = $(this).attr("myCanvas");
    var context = myCanvas.getContext("2d");

    /* ligne orange */
    context.beginPath();
    context.lineCap = "round";
    context.moveTo("10", "80");
    context.lineTo("285", "5");
    context.moveTo("285", "5");
    context.lineTo("400", "150");
    context.moveTo("400", "310");
    context.lineTo("315", "400");
    context.moveTo("315", "400");
    context.lineTo("0", "275");
    context.moveTo("-15", "275");
    context.lineTo("10", "80");
    context.lineWidth = 3;
    context.strokeStyle = "#FAD60A";
    context.stroke();
    context.closePath();

    /* ligne rouge */
    context.beginPath();
    context.lineCap = "round";
    context.moveTo("0", "95");
    context.lineTo("270", "0");
    context.moveTo("270", "0");
    context.lineTo("400", "140");
    context.moveTo("400", "310");
    context.lineTo("330", "390");
    context.moveTo("330", "390");
    context.lineTo("0", "290");
    context.moveTo("-5", "290");
    context.lineTo("0", "95");
    context.lineWidth = 3;
    context.strokeStyle = "#E90047";
    context.stroke();
    context.closePath();

    /* texte SIMPLON */
    context.beginPath();
    context.font = "bold 84px champagne_limousines";
    context.fillText("S", 10, 200);
    context.fillText("I", 60, 200);
    context.fillText("M", 90, 200);
    context.fillText("P", 170, 200);
    context.fillText("L", 220, 200);
    context.fillText("N", 335, 200);
    context.closePath();

    /* texte Occitanie */
    context.beginPath();
    context.fillStyle = "#E90047";
    context.font = "bold 68px champagne_limousines";
    context.fillText("Occitanie", 130, 265);
    context.closePath();

    /* cercle */
    context.beginPath();
    context.arc(295, 170, 30, 0, Math.PI * 2);
    context.strokeStyle = "#E90047";
    context.lineWidth = 8;
    context.stroke();
    context.closePath();

    /* 2 carrés */
    context.beginPath();
    context.fillStyle = "#FAD60A";
    context.fillRect(290, 175, 10, 10);
    context.fillRect(290, 155, 10, 10);
    context.closePath();

};