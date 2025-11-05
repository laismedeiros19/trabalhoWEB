document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  // Alternar abas
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Recupera lista de alunos
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

// Gera RA automático (ex: 20250001)
const proximoNumero = (alunos.length + 1).toString().padStart(4, "0");
const anoAtual = new Date().getFullYear();
const raGerado = `${anoAtual}${proximoNumero}`;

const aluno = {
  nome: form.nomeAluno.value,
  dataNascimento: form.dataNascimento.value,
  ra: raGerado, // 🔹 RA automático
  turma: form.turmaAluno.value,
  email: form.emailAluno.value,
  telefone: form.telefoneAluno.value,
  cpf: form.cpfAluno.value,
  rg: form.rgAluno.value,
  cep: form.cep.value,
  rua: form.rua.value,
  numero: form.numero.value,
  bairro: form.bairro.value,
  cidade: form.cidade.value,
  estado: form.estado.value,
};


    // Salvar no localStorage
    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(alunos));

    alert("✅ Aluno cadastrado com sucesso!");
    form.reset();
  });
});
