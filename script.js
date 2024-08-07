function criptografar(texto) {
    texto = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-z ]/g, '');

    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function btnCriptografar() {
    let entradaTexto = document.getElementById("entrada__texto");
    let entradaValor = entradaTexto.value;
    if (!/^[a-z ]+$/.test(entradaValor)) {
        alert("Por favor, digite apenas letras minúsculas e espaços.");  
        return;
    }

    let saidaTexto = criptografar(entradaValor);
    let resultado = document.getElementById("saida__texto");
    let imagem = document.getElementById("secao__2__imagem");
    let texto = document.getElementById("secao__2__texto");
    let botaoCopiar = document.getElementById("btn__copiar");
    
    resultado.textContent = saidaTexto;
    imagem.style.display = 'none';
    texto.style.display = 'none';
    resultado.style.display = 'flex';
    resultado.style.justifyContent = 'space-between';
    botaoCopiar.style.display = 'block';

    entradaTexto.value = "";
}

function btnDescriptografar() {
    let entradaTexto = document.getElementById("entrada__texto");
    let entradaValor = entradaTexto.value;
    if (!/^[a-z ]+$/.test(entradaValor)) {
        alert("Por favor, digite apenas letras minúsculas e espaços.");  
        return;
    }

    let saidaTexto = descriptografar(entradaValor);
    let resultado = document.getElementById("saida__texto");
    let imagem = document.getElementById("secao__2__imagem");
    let texto = document.getElementById("secao__2__texto");
    let botaoCopiar = document.getElementById("btn__copiar");
    
    resultado.textContent = saidaTexto;
    imagem.style.display = 'none';
    texto.style.display = 'none';
    resultado.style.display = 'flex';
    resultado.style.justifyContent = 'space-between';
    botaoCopiar.style.display = 'block';

    entradaTexto.value = ""; 
}

function copiar() {
    let copyText = document.getElementById("saida__texto");
    copyText.select();
    document.execCommand("copy");
}

document.getElementById("btn__copiar").addEventListener("click", copiar);
