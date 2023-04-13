
const encriptar = ()=>{
    const text = document.getElementById('inputText').value;

    let textEncriptado = text.replace(/e/igm, 'enter');
    textEncriptado = textEncriptado.replace(/i/igm, 'imes');
    textEncriptado = textEncriptado.replace(/a/igm, 'ai');
    textEncriptado = textEncriptado.replace(/o/igm, 'ober');
    textEncriptado = textEncriptado.replace(/u/igm, 'ufat');

    document.getElementById('container2-arriba').innerHTML = textEncriptado;
    document.getElementById('container2-abajo').innerHTML = '<button class="copiar" id="copybutton" onclick="copiar()">Copiar</button>';
};

const desencriptar = ()=>{
    const text = document.getElementById('inputText').value;

    let textEncriptado = text.replace(/enter/igm, 'e');
    textEncriptado = textEncriptado.replace(/imes/igm, 'i');
    textEncriptado = textEncriptado.replace(/ai/igm, 'a');
    textEncriptado = textEncriptado.replace(/ober/igm, 'o');
    textEncriptado = textEncriptado.replace(/ufat/igm, 'u');

    document.getElementById('container2-arriba').innerHTML = textEncriptado;
    document.getElementById('container2-abajo').innerHTML = '<button class="copiar" id="copybutton" onclick="copiar()">Copiar</button>';
}

const copiar = ()=>{
    let decoderText = document.getElementById('container2-arriba');
    navigator.clipboard.writeText(decoderText.textContent);

    const button = document.getElementById('copybutton');
    button.innerHTML = '<i class="fa-solid fa-check"></i>'
    setTimeout(() => button.textContent = 'Copiar', 2000);
}


