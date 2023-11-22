const submit = document.querySelector('.submit');
const email = document.getElementById('email');
const alert = document.querySelector('.alert');

submit.addEventListener('click', (e) => {
    e.preventDefault()

    let emailValid = email.value;
    let reg = /\S+@\S+\.\S+/;

    if(reg.test(emailValid)){
        window.location.replace('submit.html')
    }else{
        alert.style.display = 'block';
    }

    email.addEventListener('input', () => {
        alert.style.display = 'none';
    })

})