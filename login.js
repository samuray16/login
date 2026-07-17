function fazerLogin() {
    
    const senha = document.getElementById("senha").value.trim();
    const email = document.getElementById("email").value.trim();
    const placa = document.getElementById("placa").value.trim();
    const notificacao = document.getElementById("notificacao");

   
    if (email === "" || placa === "" || senha === "") {
        notificacao.textContent = "Por favor, preencha todos os campos vazios";
        notificacao.style.color = "orange";
        return;
    }
   
   
    if (senha === "12345") {
        notificacao.textContent = "Senha correta!!!";
        notificacao.style.color = "green";
    } else {
        notificacao.textContent = "Senha incorreta!!!";
        notificacao.style.color = "red";
    }
}