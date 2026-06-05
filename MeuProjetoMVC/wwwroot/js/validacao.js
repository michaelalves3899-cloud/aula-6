const formulario = document.getElementById("meuFormulario");
const msgErro = document.getElementById("erro");

formulario.addEventListener("submit", function (event) {
    msgErro.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);

    let erros = [];

    if (nome === "") {
        erros.push("O campo Nome não pode estar vazio.");
    }
    if (!email.includes("@")) {
        erros.push("O Email deve conter um caractere '@'.");
    }
    if (isNaN(idade) || idade <= 0) {
        erros.push("A Idade deve ser um número maior que 0.");
    }

    if (erros.length > 0) {
        event.preventDefault(); 
        msgErro.innerHTML = erros.join("<br>"); 
    }
});