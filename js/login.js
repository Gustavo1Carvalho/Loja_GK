 let modoCadastro = false;

    function alternarParaCadastro() {
      const title = document.getElementById('form-title');
      const button = document.getElementById('submit-btn');
      const switchText = document.getElementById('switch-text');

      if (!modoCadastro) {
        title.textContent = 'Cadastro';
        button.textContent = 'Cadastrar';
        switchText.innerHTML = 'Já tem uma conta? <a onclick="alternarParaLogin()">Entrar</a>';
        modoCadastro = true;
      }
    }

    function alternarParaLogin() {
      const title = document.getElementById('form-title');
      const button = document.getElementById('submit-btn');
      const switchText = document.getElementById('switch-text');

      title.textContent = 'Login';
      button.textContent = 'Entrar';
      switchText.innerHTML = 'Não tem uma conta? <a onclick="alternarParaCadastro()">Cadastrar</a>';
      modoCadastro = false;
    }

    function handleLogin() {
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      if (!email || !senha) {
        alert("Preencha todos os campos");
        return;
      }

      if (modoCadastro) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Cadastro realizado com sucesso!");
        alternarParaLogin();
      } else {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario = usuarios.find(u => u.email === email && u.senha === senha);

        if (usuario) {
          alert("Login realizado com sucesso!");
          // redirecionar para a loja
          window.location.href = 'index.html';
        } else {
          alert("E-mail ou senha inválidos!");
        }
      }
    }