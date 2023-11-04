function mostrarOcultarSenha() {
    var senhaInput = document.getElementById("senha");
    var iconeSenha = document.getElementById("iconeSenha");

    if (senhaInput.type == "password") {
        senhaInput.type = "text";
        iconeSenha.className = "bi bi-eye-slash-fill";
    } else {
        senhaInput.type = "password";
        iconeSenha.className = "bi bi-eye-fill";
    }
}