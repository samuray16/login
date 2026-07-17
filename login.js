       function fazerLogin() {
    const senha = document.getElementById("senha").value; 
    const notificacao = document.getElementById("notificacao");
    const email = document.getElementById("email")
    const placa = document.getElementById("placa")

     
    if (email.trim ||placa.trim || senha.trim() === "") {
        notificacao.textContent = "Por favor, preencha os campos vazios";
        notificacao.style.color = "orange";
        return; 
    }
    
    if (senha === "12345") {
        notificacao.textContent = "Acesso permitido!";
        notificacao.style.color = "green";
        
    } else {
        notificacao.textContent = "Acesso negado! Senha incorreta.";
        notificacao.style.color = "red";
    }
}