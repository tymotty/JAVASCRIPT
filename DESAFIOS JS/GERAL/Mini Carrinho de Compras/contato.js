const formulario = document.querySelector("#formContato");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event){

    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const assunto = document.querySelector("#assunto").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    const resultado = document.querySelector("#resultado");

    if(nome === "" || email === "" || assunto === "" || mensagem === ""){

        resultado.style.color = "red";
        resultado.textContent = "Preencha todos os campos.";

        return;

    }

    if(!email.includes("@") || !email.includes(".")){

        resultado.style.color = "red";
        resultado.textContent = "Digite um e-mail válido.";

        return;

    }

    resultado.style.color = "green";
    resultado.textContent = "Mensagem enviada com sucesso!";

    formulario.reset();

}