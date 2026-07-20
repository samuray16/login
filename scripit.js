        const email = document.getElementById("email");
        const nome = document.getElementById("nome");
        const sobrenome = document.getElementById("sobrenome");
        const date = document.getElementById("date");
        const number = document.getElementById("number");
        const senha = document.getElementById("senha");
        const contraSenha = document.getElementById("contraSenha");
         const placa = document.getElementById("placa");

        const masculino = document.getElementById("masculino");
        const feminino = document.getElementById("feminino");

        const botao = document.getElementById("Meubotao");
        const notificacao = document.getElementById("notificacao");

        const camposTexto = [nome, sobrenome, email, date, number, senha, contraSenha, placa];

        function ValidarCamposPreenchidos() {
            const todosTextoPreenchidos = camposTexto.every(campo => campo.value.trim() !== "");
            const generoSelecionado = masculino.checked || feminino.checked;

            if (todosTextoPreenchidos && generoSelecionado) {
                botao.disabled = false; 
                notificacao.textContent = "";
            } else {
                botao.disabled = true;
                notificacao.textContent = "";
            }
        }
      

        camposTexto.forEach(campo => {
            campo.addEventListener("input", ValidarCamposPreenchidos);
        });
        masculino.addEventListener("change", ValidarCamposPreenchidos);
        feminino.addEventListener("change", ValidarCamposPreenchidos);


       
        botao.addEventListener("click", async function() {
            if (senha.value !== contraSenha.value) {
                notificacao.textContent = "As senhas não coincidem!";
                notificacao.style.color = "red";
                return; 
            }
                
            const dadosCadastro = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                date: date.value,
                number: number.value,
                senha: senha.value,
                placa: placa.value,
                genero: masculino.checked ? "Masculino" : "Feminino"
            };

            console.log("Dados salvos:", dadosCadastro);
            window.location.href = "../index.html";
           
          botao.addEventListener("click", async function() {
    if (senha.value !== contraSenha.value) {
        notificacao.textContent = "As senhas não coincidem!";
        notificacao.style.color = "red";
        return; 
    }

        const dadosCadastro = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            date: date.value,
            number: number.value,
            senha: senha.value,
            genero: masculino.checked ? "Masculino" : "Feminino"
        };

        console.log("Dados salvos:", dadosCadastro);

      });
        });