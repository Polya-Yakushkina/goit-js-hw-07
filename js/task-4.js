const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handlerForm)

function handlerForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        alert(`All form fields must be filled in`);
        return;
    }
 
    const formData = new FormData(event.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value.trim();
    });
    
    console.log(data);
    
    loginForm.reset();
};
