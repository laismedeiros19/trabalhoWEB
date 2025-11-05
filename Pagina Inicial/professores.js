document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProfessor");
  const tabela = document.getElementById("tabelaProfessores");
  const busca = document.getElementById("buscaProfessor");

  let professores = JSON.parse(localStorage.getItem("professores")) || [];

  const atualizarTabela = () => {
    tabela.innerHTML = "";
    professores.forEach((p, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${p.foto || 'https://via.placeholder.com/45'}" class="foto-professor"></td>
        <td>${p.nome}</td>
        <td>${p.materia}</td>
        <td>${p.email}</td>
        <td>${p.telefone}</td>
        <td>${p.id}</td>
        <td>
          <button class="acao-btn" onclick="editarProfessor(${i})">✏️</button>
          <button class="acao-btn" onclick="excluirProfessor(${i})">🗑️</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  };

  // Gera ID automático (ex: PROF0001)
  const gerarId = () => {
    const numero = (professores.length + 1).toString().padStart(4, "0");
    return `PROF${numero}`;
  };

  // Cadastro
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const arquivoFoto = document.getElementById("fotoProfessor").files[0];
    let fotoURL = "";
    if (arquivoFoto) {
      const reader = new FileReader();
      reader.onload = () => {
        fotoURL = reader.result;
        salvarProfessor(fotoURL);
      };
      reader.readAsDataURL(arquivoFoto);
    } else {
      salvarProfessor();
    }
  });

  const salvarProfessor = (foto = "") => {
    const novoProfessor = {
      id: gerarId(),
      nome: form.nomeProfessor.value,
      dataNascimento: form.dataNascimento.value,
      cpf: form.cpfProfessor.value,
      email: form.emailProfessor.value,
      telefone: form.telefoneProfessor.value,
      materia: form.materia.value,
      senha: form.senhaProfessor.value,
      foto: foto,
    };

    professores.push(novoProfessor);
    localStorage.setItem("professores", JSON.stringify(professores));
    form.reset();
    atualizarTabela();
    alert("✅ Professor cadastrado com sucesso!");
  };

  // Busca
  busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();
    const filtrados = professores.filter(
      (p) =>
        p.nome.toLowerCase().includes(termo) ||
        p.materia.toLowerCase().includes(termo)
    );
    tabela.innerHTML = "";
    filtrados.forEach((p, i) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${p.foto || 'https://via.placeholder.com/45'}" class="foto-professor"></td>
        <td>${p.nome}</td>
        <td>${p.materia}</td>
        <td>${p.email}</td>
        <td>${p.telefone}</td>
        <td>${p.id}</td>
        <td>
          <button class="acao-btn" onclick="editarProfessor(${i})">✏️</button>
          <button class="acao-btn" onclick="excluirProfessor(${i})">🗑️</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  });

  window.excluirProfessor = (i) => {
    if (confirm("Deseja excluir este professor?")) {
      professores.splice(i, 1);
      localStorage.setItem("professores", JSON.stringify(professores));
      atualizarTabela();
    }
  };

  window.editarProfessor = (i) => {
    const p = professores[i];
    form.nomeProfessor.value = p.nome;
    form.emailProfessor.value = p.email;
    form.telefoneProfessor.value = p.telefone;
    form.materia.value = p.materia;
    professores.splice(i, 1);
  };

  atualizarTabela();
});
