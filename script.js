document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    displayOutput(encryptedText);
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    displayOutput(decryptedText);
}

function displayOutput(text) {
    document.getElementById('outputText').value = text;
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
    document.getElementById('placeholder-text').style.display = 'none';
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
