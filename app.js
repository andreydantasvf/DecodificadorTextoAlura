function handleEncrypt() {
  const texto = document.getElementById('text').value.trim().toLowerCase();

  const encryptedText = texto.split("").map(letra => {
    switch (letra) {
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

  const decryptedText = texto.split(" ").map(word => {
    let decryptedWord = word.replace(/ai/g, 'a');
    decryptedWord = decryptedWord.replace(/enter/g, 'e');
    decryptedWord = decryptedWord.replace(/imes/g, 'i');
    decryptedWord = decryptedWord.replace(/ober/g, 'o');
    decryptedWord = decryptedWord.replace(/ufat/g, 'u');

    return decryptedWord
  });

  showResultText(decryptedText.join(' '));
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