
function iniciar(){
    var inicio = document.createElement("img")
inicio.src = "./Img/inicio.png";
document.getElementById("container").appendChild(inicio);
}

var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;



var x;
var y;
var vet = [];

var met = []
var i;
function comecar(j) {
    document.getElementById('comecar').value = "Recomeçar"
    i = 1;
    document.getElementById("container").innerHTML = ""
    document.getElementById("td1").innerHTML = "";
    document.getElementById("td2").innerHTML = "";
    document.getElementById("td3").innerHTML = "";
    document.getElementById("td4").innerHTML = "";
    document.getElementById("td5").innerHTML = "";
    document.getElementById("td6").innerHTML = "";
    document.getElementById("td7").innerHTML = "";
    document.getElementById("td8").innerHTML = "";
    document.getElementById("td9").innerHTML = "";
    x = false;
    y = false;
    t1 = ' ';
    t2 = ' ';
    t3 = ' ';
    t4 = ' ';
    t5 = ' ';
    t6 = ' ';
    t7 = ' ';
    t8 = ' ';
    t9 = ' ';

    met = [
        [, ,],
        [, ,],
        [, ,]
    ]
}

function reiniciar() {
    location.reload();
}
function teste1() {
    if (t1 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td1").appendChild(img);
            t1 = i;
            i++;
            met[0][0] = 'o';
            verifica();

        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td1").appendChild(img);
            t1 = i;
            i++
            met[0][0] = 'x';
            verifica();
        }
    }
}
function teste2() {
    if (t2 == ' ') {

        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td2").appendChild(img);
            t2 = i;
            i++;

            met[0][1] = 'o';
            verifica();

        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td2").appendChild(img);
            t2 = i;
            i++;

            met[0][1] = 'x';
            verifica();
        }
    }
}
function teste3() {
    if (t3 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td3").appendChild(img);
            t3 = i;
            i++;

            met[0][2] = 'o';
            verifica();

        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td3").appendChild(img);
            t3 = i;
            i++

            met[0][2] = 'x';
            verifica();
        }
    }
}

function teste4() {
    if (t4 == ' ') {

        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td4").appendChild(img);
            t4 = i;
            i++;

            met[1][0] = 'o';
            verifica();
        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td4").appendChild(img);
            t4 = i;
            i++;


            met[1][0] = 'x';
            verifica();

        }
    }
}
function teste5() {
    if (t5 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td5").appendChild(img);
            t5 = i;
            i++;

            met[1][1] = 'o';
            verifica();

        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td5").appendChild(img);
            t5 = i;
            i++;

            met[1][1] = 'x';
            verifica();
        }
    }
}
function teste6() {
    if (t6 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td6").appendChild(img);
            t6 = i;
            i++

            met[1][2] = 'o';
            verifica();

        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td6").appendChild(img);
            t6 = i;
            i++

            met[1][2] = 'x';
            verifica();
        }
    }
}
function teste7() {
    if (t7 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td7").appendChild(img);
            t7 = i;
            i++

            met[2][0] = 'o';
            verifica();
        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td7").appendChild(img);
            t7 = i;
            i++;

            met[2][0] = 'x';
            verifica();
        }
    }
}
function teste8() {
    if (t8 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td8").appendChild(img);
            t8 = i;
            i++

            met[2][1] = 'o';
            verifica();
        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td8").appendChild(img);
            t8 = i;
            i++;

            met[2][1] = 'x';
            verifica();
        }
    }
}
function teste9() {
    if (t9 == ' ') {
        if (i % 2 == 0) {
            var img = document.createElement("img")
            img.src = "./Img/bola.png";
            document.getElementById("td9").appendChild(img);
            t9 = i;
            i++

            met[2][2] = 'o';
            verifica();
        } else {
            var img = document.createElement("img")
            img.src = "./Img/x.png";
            document.getElementById("td9").appendChild(img);
            t9 = i;
            i++

            met[2][2] = 'x';
            verifica();
        }
    }
}

function verifica() {
    var l = 0;
    var c = 0
    for (l = 0; l < 3; l++) {
        if ((met[l][0] === met[l][1]) && (met[l][1] === met[l][2])) {
            if (met[l][1] === 'x') {
                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';
                x = true;
                res();

            } else if (met[l][1] === 'o') {

                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';
                y = true;

                res();
            }
        }

    }
    if (x == false && y == false) {
        for (c = 0; c < 3; c++) {
            if ((met[0][c] === met[1][c]) && (met[1][c] === met[2][c])) {
                if (met[1][c] === 'x') {

                    t1 = 'true';
                    t2 = 'true';
                    t3 = 'true';
                    t4 = 'true';
                    t5 = 'true';
                    t6 = 'true';
                    t7 = 'true';
                    t8 = 'true';
                    t9 = 'true';

                    x = true;
                    res();

                } else if (met[1][c] === 'o') {

                    t1 = 'true';
                    t2 = 'true';
                    t3 = 'true';
                    t4 = 'true';
                    t5 = 'true';
                    t6 = 'true';
                    t7 = 'true';
                    t8 = 'true';
                    t9 = 'true';
                    y = true;
                    res();
                }
            }
        }
        if ((met[0][0] == met[1][1]) && (met[1][1] == met[2][2])) {
            if (met[1][1] === 'x') {

                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';

                x = true;
                res();

            } else if (met[1][1] === 'o') {
                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';

                y = true;
                res();
            }
        }
        else if ((met[0][2] == met[1][1]) && (met[1][1] == met[2][0])) {
            if (met[1][1] === 'x') {

                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';

                x = true;
                res();

            } else if (met[1][1] === 'o') {
                t1 = 'true';
                t2 = 'true';
                t3 = 'true';
                t4 = 'true';
                t5 = 'true';
                t6 = 'true';
                t7 = 'true';
                t8 = 'true';
                t9 = 'true';

                y = true;
                res();

            }
        } else if (i == 10) {
            res()
        }
    }




}
var p1 = 0;
var p2 = 0;
function res() {

    if (x == true) {
        p1++;
        document.getElementById("player1").innerHTML = "Player 1: " + p1;
        var imagem_vit = document.createElement("img")
        imagem_vit.src = "./Img/Vitoria_p1.png";
        document.getElementById("container").appendChild(imagem_vit);
    }
    else if (y == true) {
        p2++;
        document.getElementById("player2").innerHTML = "Player 2: " + p2;
        var imagem_vit = document.createElement("img")
        imagem_vit.src = "./Img/Vitoria_p2.png";
        document.getElementById("container").appendChild(imagem_vit);

    } else if ((x == false) && (y == false)) {

        var imagem_vit = document.createElement("img")
        imagem_vit.src = "./Img/Empate.png";
        document.getElementById("container").appendChild(imagem_vit);

    }
}
