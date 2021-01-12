'use strict'
let inputValid = document.getElementById("validation-input");

let totalLengtm = inputValid.getAttribute('data-length')

inputValid.addEventListener('oninput') = function () {
    if (inputValid.nodeValue.length = 10) {
        inputValid.classList.remove('invalid')
         inputValid.classList.add('valid')
    }
    if (inputValid.nodeValue.length === 0) {
        inputValid.classList.remove('valid')
        inputValid.classList.add('invalid')
    }
    if (inputValid.nodeValue.length !== 10 && inputValid.Value.length !== 0) {
        inputValid.classList.add('inValid')
    }
}