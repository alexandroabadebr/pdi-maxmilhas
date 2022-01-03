const input = document.querySelector('input')
input.focus();

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14 - MASCARA CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }
})