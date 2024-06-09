const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

nameIn.addEventListener('input', function () {
    if (this.value.trim() === '') {
        nameOut.textContent = `Anonymous`;
    }
    else {
        nameOut.textContent = this.value.trim();
    }
});

