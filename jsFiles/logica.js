
function encryptText() {
    let encryptedText = ""
    let placeToShowEncryptedText = document.getElementById("place_to_show_encryption");
    let imgNoInsertedTxt = document.getElementById("notFoundedTxtImage");
    let noMessageFoundTxt = document.getElementById("notFoundedTxtTittle");
    let reqMessageTxt = document.getElementById("notFoundedTxtReqMessg");
    let copyButton = document.getElementById("copy_button");
    let text = document.getElementById("area_text_to_encrypt").value;
    let newText = text;
    let requirementsFulfillCondition = checkTextRequirements(newText);

    if (requirementsFulfillCondition) {
        for (const letter of newText) {
            let encryptedLetter = encryptLetter(letter);
            encryptedText += encryptedLetter;
        }
        hideElementsWithNone(imgNoInsertedTxt, noMessageFoundTxt, reqMessageTxt);
        placeToShowEncryptedText.innerHTML = encryptedText;
        showElementsWithBlock(placeToShowEncryptedText, copyButton);

    } else {
        Swal.fire({
            title: 'Error en el texto',
            text: 'El texto tiene limitantes o no contiene ningún caracter. Por favor, modificarlo.',
            icon: 'error',
            timer: 4000,
            showConfirmButton: false
          })       
    }
}

function encryptLetter(element) {
    switch (element) {
        case "a":
            return "ai";
        case "e":
            return "enter"
        case "i":
            return "imes";
        case "o":
            return "ober";
        case "u":
            return "ufat";
        default:
            return element;
    }
}

function checkTextRequirements(text) {
    const accents = /[^\w\sÀ-ÿ.]/g;
    if (!text) {
        return false
    }
    for (const letter of text) {
        let capitaledLetter = letter.toUpperCase();
        if (letter !== ' ' && letter !== '.' && (letter === capitaledLetter || accents.test(letter))) {
            return false;
        }
    }
    return true
}

function copyText() {
    let placeToShowEncryptedText = document.getElementById("place_to_show_encryption");
    navigator.clipboard.writeText(placeToShowEncryptedText.textContent).then(() => {
        alert("Texto copiado")
    }).catch(err => {
        alert("Error al copiar")
    });
}

function decryptLetters() {
    let placeToShowEncryptedText = document.getElementById("place_to_show_encryption");
    let imgNoInsertedTxt = document.getElementById("notFoundedTxtImage");
    let noMessageFoundTxt = document.getElementById("notFoundedTxtTittle");
    let reqMessageTxt = document.getElementById("notFoundedTxtReqMessg");
    let copyButton = document.getElementById("copy_button");
    let text = document.getElementById("area_text_to_encrypt").value;
    let wordToDecrypt = text;
    let requirementsFulfillCondition = checkTextRequirements(wordToDecrypt);

    if (requirementsFulfillCondition) {
        wordToDecrypt = wordToDecrypt.replace(/ai/g, "a");

        wordToDecrypt = wordToDecrypt.replace(/enter/g, "e");

        wordToDecrypt = wordToDecrypt.replace(/imes/g, "i");

        wordToDecrypt = wordToDecrypt.replace(/ober/g, "o");

        wordToDecrypt = wordToDecrypt.replace(/ufat/g, "u");

        hideElementsWithNone(imgNoInsertedTxt, noMessageFoundTxt, reqMessageTxt);
        placeToShowEncryptedText.innerHTML = wordToDecrypt;
        showElementsWithBlock(placeToShowEncryptedText, copyButton);

    } else {
        Swal.fire({
            title: 'Error en el texto',
            text: 'El texto tiene limitantes o no contiene ningún caracter. Por favor, modificarlo.',
            icon: 'error',
            timer: 4000,
            showConfirmButton: false
          })    
    }
}

function hideElementsWithNone(...elements) {
    elements.forEach(element => element.style.display = "none");
}

function showElementsWithBlock(...elements) {
    elements.forEach(element => element.style.display = "block");
}