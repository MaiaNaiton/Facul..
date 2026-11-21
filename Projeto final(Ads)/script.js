//Declarando as variáveis buscando por id dentro do html
const nome = document.querySelector('#nome');
const whatsapp = document.querySelector('#whatsapp');
const email = document.querySelector('#email');

const form = document.querySelector("form");

form.addEventListener('submit', (evento) => {
    let enviarForm = true;

    if (!nome.value) {
        console.log('Nome está vazio');
        enviarForm = false; //não enviar se o campo estiver vazio
    }
    if (!whatsapp.value) {
        console.log('Whatsapp está vazio');
        enviarForm = false; //não enviar se o campo estiver vazio
    }
    if (!email.value) {
        console.log('E-mail está vazio');
        enviarForm = false; //não enviar se o campo estiver vazio
    }
    const generoMarcado = document.querySelector('input[name="genero"]:checked');
    if (!generoMarcado) {
        console.log('Gênero está vazio')
        enviarForm = false //não enviar se o campo não tiver sido selcionado.
    }
    if (!enviarForm) {
        evento.preventDefault();
    }
})

