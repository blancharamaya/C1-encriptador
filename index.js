function encriptar() {
    let texto = document.getElementById("txt-one").value;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == texto[i].toLowerCase()) {
            if(texto[i] == "á"||texto[i]=="é"||texto[i]=="ó"||texto[i]=="ú"){
                alert("Error: No se aceptan acentos");
                document.getElementById('txt-one').focus()
                document.getElementById('txt-one').value ="";
                document.getElementById('txt-two').value ="";
                break;
            }else{
                let textoCifrado = texto
                .replace(/i/gi, "imes")
                .replace(/e/gi, "enter")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");
            document.getElementById("txt-two").value = textoCifrado
            }
        } else { 
            alert("Error: No se aceptan mayuscula");
            document.getElementById('txt-one').focus()
            document.getElementById('txt-one').value ="";
            document.getElementById('txt-two').value ="";
            break;
        }
    }
}

function desencriptar(txt) {
    let texto = document.getElementById('txt-one').value;
    let textoDescrifrado = texto
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById('txt-two').value = textoDescrifrado;
}