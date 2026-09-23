function mudarSenha(){
  const tipoSenha = document.getElementById('senha');
  if (tipoSenha.type === 'password'){
    tipoSenha.type = 'text';
    document.getElementById('olhoSenha').textContent = "^_^";
    tipoSenha.placeholder = "Senha";
  } else{
    tipoSenha.type = 'password';
    document.getElementById('olhoSenha').textContent = "O.O";
    tipoSenha.placeholder = "••••••••";
  }
}

function entrar() {
    // 2. Pegamos os valores que o usuário digitou nos inputs da tela
    let nomeDigitado = document.getElementById('nomeQueQuero').value;
    let emailDigitado = document.getElementById('email').value;
    let senhaDigitada = document.getElementById('senha').value;

    localStorage.setItem('usuario', nomeDigitado);

    window.location.href = 'pagExepli.html'
}


