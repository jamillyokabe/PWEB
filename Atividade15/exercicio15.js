function validar() {
    let nome = document.forms.formulario1.elements["idNome"].value.trim();
    let email = document.forms.formulario1.elements["idEmail"].value.trim();
    let coment = document.forms.formulario1.elements["idComent"].value.trim();
    let resposta = document.querySelector('input[name="resposta"]:checked');

    if (nome.length < 10) {
        alert("Digite um nome válido! O nome deve ter pelo menos 10 caracteres.");
        document.forms.formulario1.elements["idNome"].focus();
        return false;
    }

    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Digite um email válido!");
        document.forms.formulario1.elements["idEmail"].focus();
        return false;
    }

    if (coment.length < 20) {
        alert("Seu comentário deve ter pelo menos 20 caracteres!");
        document.forms.formulario1.elements["idComent"].focus();
        return false;
    }

    if (resposta === null) {
        alert("Responda a pesquisa!");
        return false;
    }

    if (resposta.value === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à essa página!");
    }

    document.forms.formulario1.reset();
    return false;
}