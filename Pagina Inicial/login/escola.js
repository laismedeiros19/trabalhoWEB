document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const msg = document.getElementById("cadastroMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeEscola = document.getElementById("nomeEscola").value.trim();
    const cnpj = document.getElementById("cnpj").value.trim();
    const email = document.getElementById("emailCadastro").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senhaCadastro").value.trim();
    const confirmaSenha = document.getElementById("confirmaSenha").value.trim();

    if (senha !== confirmaSenha) {
      msg.textContent = "❌ As senhas não conferem!";
      msg.style.color = "red";
      return;
    }

    const novaEscola = {
      id: Date.now(),
      nome: nomeEscola,
      cnpj,
      email,
      telefone,
      senha,
      tipoUsuario: "admin",
    };

    const escolas = JSON.parse(localStorage.getItem("escolas")) || [];

    if (escolas.some(e => e.cnpj === cnpj)) {
      msg.textContent = "⚠️ Já existe uma escola com esse CNPJ.";
      msg.style.color = "#c27c00";
      return;
    }

    escolas.push(novaEscola);
    localStorage.setItem("escolas", JSON.stringify(escolas));

    // 💬 Mensagem de sucesso
    msg.innerHTML = `
      <div class="success-popup">
        <h3>🎉 Escola cadastrada com sucesso!</h3>
        <p>Você será redirecionado para o login do administrador...</p>
      </div>
    `;
    msg.style.color = "green";

    // ⏳ Redireciona automaticamente após 3 segundos
    setTimeout(() => {
      window.location.href = "login-admin.html";
    }, 3000);
  });
});
