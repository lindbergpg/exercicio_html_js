const form = document.getElementById('formvalid');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroA = document.getElementById('numa').value;
    let numeroB = document.getElementById('numb').value;

    let validador = numeroB > numeroA

    const mensagemSucesso = `Formulário <b>VALIDADO,</b> pois o número <b>${numeroB}</b> é maior que o número <b>${numeroA}</b>.`;
    const mensagemErro = `Formulário <b>NÃO VALIDADO,</b> pois o número <b>${numeroB}</b> é menor que o número <b>${numeroA}</b>.`;


    if (validador) {
        const containerMensagemSucesso = document.querySelector('.successmsg');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA = '';
        numeroB = '';
    } else {
        const containerMensagemErro = document.querySelector('.errmsg');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
})

console.log(form)