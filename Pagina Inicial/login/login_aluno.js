document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginAlunoForm");
  const msg = document.getElementById("loginMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ra = document.getElementById("raAluno").value.trim();
    const senha = document.getElementById("senhaAluno").value.trim();

    // Recupera alunos do localStorage
    const alunos = JSON.parse(localStorage.getItem("alunos")) || [];

    // Procura o aluno pelo RA e senha
    const aluno = alunos.find(a => a.ra === ra && a.senha === senha);

    if (!aluno) {
      msg.textContent = "❌ RA ou senha incorretos!";
      msg.style.color = "red";
      return;
    }

    // Guarda o aluno logado (sessão simulada)
    localStorage.setItem("alunoLogado", JSON.stringify(aluno));

    msg.innerHTML = `
      <div class="success-popup">
        <h3>🎉 Login realizado com sucesso!</h3>
        <p>Redirecionando para o portal...</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = "portal-aluno.html";
    }, 2500);
  });
});
