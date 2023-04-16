function handleEncrypt() {
  const texto = document.getElementById('text').value.trim().toLowerCase();

  const encryptedText = texto.split("").map(letra => {
    switch(letra) {
      case 'a': return 'ai';
      case 'e': return 'enter';
      case 'i': return 'imes';
      case 'o': return 'ober';
      case 'u': return 'ufat';
      default: return letra;
    }
  }).join('');

  showResultText(encryptedText);
}

function handleDecrypt() {
  const texto = document.getElementById('text').value.trim().toLowerCase();

  let decryptedText = texto.replace('ai', 'a');
  decryptedText = decryptedText.replace('enter', 'e');
  decryptedText = decryptedText.replace('imes', 'i');
  decryptedText = decryptedText.replace('ober', 'o');
  decryptedText = decryptedText.replace('ufat', 'u');

  showResultText(decryptedText);
}

function handleCopyText() {
  const elementText = document.querySelector("#resultText");

  navigator.clipboard.writeText(elementText.innerHTML);
  alert("Texto copiado!");
}

function showResultText(text) {
  const divEmptyText = document.querySelector(".empty-text");
  const divResult = document.querySelector(".result");
  const elementText = document.querySelector("#resultText");

  divEmptyText.classList.add('disabled');
  divResult.classList.remove('disabled');

  elementText.innerHTML = text;
}