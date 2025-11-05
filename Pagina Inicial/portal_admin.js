document.addEventListener("DOMContentLoaded", () => {
  const nome = JSON.parse(localStorage.getItem("adminLogado"))?.nome || "Administrador";
  document.getElementById("adminNome").textContent = nome;

  // Gráfico de desempenho geral
  const ctx1 = document.getElementById("graficoDesempenho");
  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["Matemática", "Português", "História", "Ciências", "Inglês"],
      datasets: [{
        label: "Média Geral",
        data: [7.8, 8.2, 7.5, 8.0, 7.9],
        backgroundColor: "#2563eb"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  // Gráfico de acessos
  const ctx2 = document.getElementById("graficoAcessos");
  new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
      datasets: [{
        label: "Acessos ao sistema",
        data: [30, 45, 40, 55, 60],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  // Logout
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("adminLogado");
    window.location.href = "login-admin.html";
  });
});
