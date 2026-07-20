function fazerLogin() {
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const notificacao = document.getElementById("notificacao");

   
    if (email === "" || senha === "") {
        notificacao.textContent = "Por favor, preencha todos os campos vazios";
        notificacao.style.color = "orange";
        return;
    }
   
   
    if (senha === "12345") {
        notificacao.textContent = "login feito com sucesso";
        notificacao.style.color = "darkblue";
    } else {
        notificacao.textContent = "Senha incorreta!!!";
        notificacao.style.color = "red";
    }
}