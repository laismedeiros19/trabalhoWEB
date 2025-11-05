// Abrir e fechar submenus
document.querySelectorAll(".menu-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    parent.classList.toggle("active");
  });
});

// Alternar conteúdo principal
document.querySelectorAll("[data-page]").forEach(link => {
  link.addEventListener("click", () => {
    const page = link.getAttribute("data-page");
    carregarPagina(page);
  });
});

// Função para carregar conteúdo no <main>
function carregarPagina(page) {
  document.getElementById("conteudo").innerHTML = `<h2>Carregando ${page}...</h2>`;
  
  setTimeout(() => {
    document.getElementById("conteudo").innerHTML =
      `<h2>Página: ${page}</h2><p>Conteúdo em desenvolvimento...</p>`;
  }, 300);
}

// Carrega dashboard ao iniciar
window.onload = () => carregarPagina("dashboard");

function carregarPagina(page) {
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
    });
}
