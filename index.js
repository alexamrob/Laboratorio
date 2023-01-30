const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            const expName = /^[a-zA-Z\sÑñ]{1,30}$/
            if(expName.test(e.target.value)){
                document.getElementById('name').classList.remove('invalid');
                document.getElementById('name').classList.add('valid');
                document.getElementById('nameError').innerHTML = "";
            } else if (e.target.value == 0){
                document.getElementById('nameError').innerHTML = "Rellene este campo";
                document.getElementById('name').classList.add('invalid');
            } else {
                document.getElementById('nameError').innerHTML = "Nombre no valido";
                document.getElementById('name').classList.add('invalid');
            }
        break;

        case "email":
            const expEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            if(expEmail.test(e.target.value)){
                document.getElementById('email').classList.remove('invalid');
                document.getElementById('email').classList.add('valid');
                document.getElementById('emailError').innerHTML = "";
            } else if (e.target.value == 0){
                document.getElementById('emailError').innerHTML = "Rellene este campo";
                document.getElementById('email').classList.add('invalid');
            } else {
                document.getElementById('emailError').innerHTML = "Email invalido";
                document.getElementById('email').classList.add('invalid');
            }
        break;

        case "password":
            const expPass = /^.{8,30}$/
            if(expPass.test(e.target.value)){
                document.getElementById('password').classList.remove('invalid');
                document.getElementById('password').classList.add('valid');
                document.getElementById('passwordError').innerHTML = "";
            } else if (e.target.value == 0){
                document.getElementById('passwordError').innerHTML = "Rellene este campo";
                document.getElementById('password').classList.add('invalid');
            } else {
                document.getElementById('passwordError').innerHTML = "Debe tener al menos 8 caracteres";
                document.getElementById('password').classList.add('invalid');
            }
        break;  
        
        case "password2":
            const inputPassword1 = document.getElementById('password');
            const inputPassword2 = document.getElementById('password2');
        
            if(inputPassword1.value !== inputPassword2.value){
                document.getElementById('password2Error').innerHTML = "Las contraseñas no coinciden";
                document.getElementById('password2').classList.add('invalid');
            } else {
                document.getElementById('password2').classList.remove('invalid');
                document.getElementById('password2').classList.add('valid');
                document.getElementById('password2Error').innerHTML = "";
            }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('keyup', validarFormulario);

})

formulario.addEventListener('submit',(e) => {
    e.preventDefault();
    formulario.reset();
    alert("La inscripción ha sido correcta");
    document.querySelectorAll('.valid').forEach((icono) => {
        icono.classList.remove('valid');
    })
})
